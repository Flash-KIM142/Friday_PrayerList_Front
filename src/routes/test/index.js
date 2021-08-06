import React, { useState, useEffect} from 'react';
import '../../index.css';
import axios from 'axios';
import { Link, } from "react-router-dom"
import ApiService from '../../services/apiService';
import PagedPrayerLists from '../../components/pagedPrayerLists';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Test = () => {
    const [data, setData] = useState({
        currentPage: null,
        totalPage: 0,
        lists: [],
    });

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
            <Header />

            <div class="bodyWrapper">

                {/* arrow 함수 알아보고, log를 적극 활용하라 */}
                {/* 기도제목 리스트 Form */}
                <PagedPrayerLists {...data}/>

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

                <div class="btn_group1">
                    <Link to="/write">
                        <button class="writeNewBtn">기도제목 작성</button>
                    </Link>
                    <Link to="/dateCollection">
                        <button class="dateCollectionBtn">모아보기</button>
                    </Link>
                </div>

            </div>


            <Footer />
        </>
    )
}


export default Test;