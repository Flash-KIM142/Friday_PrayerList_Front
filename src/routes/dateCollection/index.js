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
            <DateCollectionPrayerLists data={prayerLists} />
            <Footer />
        </>
    )
}

export default DateCollection;