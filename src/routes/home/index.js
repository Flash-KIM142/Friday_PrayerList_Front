import React, { useState, useEffect} from 'react';
import '../../index.css';
import { Link, } from "react-router-dom"
import ApiService from '../../services/apiService';
import PagedPrayerLists from '../../components/pagedPrayerLists';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Home = () => {
    const [data, setData] = useState({
        currentPage: null,
        totalPage: 0,
        lists: [],
    });

    // let props = {
    //     currentPage: data.currentPage,
    //     totalPage: data.totalPage,
    //     lists: data.lists,
    // }

    const pageNumber = [];
    for (let i = 0; i < data.totalPage; i++) {
        pageNumber.push(i);
    }

    useEffect(()=> {
        getPagedPrayerLists();
        console.log(data.currentPage);
    }, [data.currentPage])

    const getPagedPrayerLists = () => {
        ApiService.getPagedPrayerLists(data.currentPage)
            .then(res => {
                // console.log(res.data.value.totalPages);
                setData({
                    currentPage: res.data.value.pageable.pageNumber,
                    totalPage: res.data.value.totalPages,
                    lists: res.data.value.content,
                })
            })
            .catch(e => {
                console.log("err");
                console.log(e);
            })
    }

    return (
        <>
            <div class="pageWrapper">
                <Header />

                <div class="bodyWrapper">

                    {/* arrow 함수 알아보고, log를 적극 활용하라 */}
                    {/* 기도제목 리스트 Form */}
                    <PagedPrayerLists {...data}/>
                    {/* <PagedPrayerLists {...props}/> */}

                    <ul class="pagination">
                        {pageNumber.map((pageNum) =>
                            pageNum === data.currentPage ? (
                                <li
                                    key={pageNum}
                                    class="paginationItemSelect"
                                    onClick={() => {
                                        setData({ currentPage: pageNum });
                                    }}
                                >
                                    {pageNum}
                                </li>
                            ) : (
                                <li
                                    key={pageNum}
                                    class="paginationItemNonSelect"
                                    onClick={() => {
                                        setData({ currentPage: pageNum });
                                    }}
                                >
                                    {pageNum}
                                </li>
                            )
                        )}
                    </ul>

                    <Link to="/dateCollection">
                        <button class="dateCollectionBtn">아번주 기도제목 모아보기</button>
                    </Link>

                </div>

                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Home;