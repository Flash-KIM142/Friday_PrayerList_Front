import React, { useState, useEffect} from 'react';
import '../../index.css';
import ApiService from '../../services/apiService';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DateCollectionPrayerLists from '../../components/dateCollection';

const DateCollection = () => {
    const [prayerLists, setPrayerLists] = useState([]);

    useEffect(()=> {
        getPrayerListsOfThisWeek();
    }, [])

    const getPrayerListsOfThisWeek = () => {
        ApiService.getPrayerListsOfThisWeek()
        .then(res => {
            console.log(res.data.value);
            setPrayerLists(res.data.value);
        })
        .catch(e => {
            console.log("err");
            console.log(e);
        })
    }


    return (
        <>
            <Header />

            {/* <div class="dateInputFormTail">
                    <button class="submitBtn"
                        onClick={() => {
                            if(window.confirm('형식을 맞춰 썼습니까?')===true){
                                getPrayerListsOfThisWeek();
                            }
                            else{
                                return false;
                            }
                        }}>이번주 기도제목 모아보기</button>
                </div> */}

            <DateCollectionPrayerLists data={prayerLists} />

            <Footer />
        </>
    )
}

export default DateCollection;