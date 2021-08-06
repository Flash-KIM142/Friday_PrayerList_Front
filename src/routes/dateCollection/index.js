import React, { useState, useEffect} from 'react';
import '../../index.css';
import ApiService from '../../services/apiService';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DateCollectionPrayerLists from '../../components/dateCollection';

const DateCollection = () => {
    const initialDateInputs = {
        startDate: '',
        endDate: '',
    }

    const [prayerLists, setPrayerLists] = useState([]);

    const [dateInputs, setDateInputs] = useState(initialDateInputs);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setDateInputs({ ...dateInputs, [name]: value })
    }

    // useEffect(()=> {
    //     getPrayerListsBetweenTwoDates();
    // }, [dateInputs])

    const getPrayerListsBetweenTwoDates = () => {
        ApiService.getPrayerListsBetweenTwoDates(dateInputs.startDate, dateInputs.endDate)
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
            
            <div class="dateInputForm">
                <div class="dateInputFormHeader">

                </div>

                <div class="dateInputFormBody">
                    <input class="startDateInput" 
                        value={dateInputs.startDate} 
                        name="startDate" 
                        placeholder="ex) 2021-07-29" 
                        onChange={handleInputChange}
                    />
                    <input class="endDateInput" 
                        value={dateInputs.endDate}
                        name="endDate"
                        placeholder="ex) 2021-07-30"
                        onChange={handleInputChange}
                    />
                </div>

                <div class="dateInputFormTail">
                    <button class="submitBtn"
                        onClick={() => {
                            if(window.confirm('형식을 맞춰 썼습니까?')===true){
                                getPrayerListsBetweenTwoDates();
                            }
                            else{
                                return false;
                            }
                        }}>제출</button>
                </div>
            </div>

            <DateCollectionPrayerLists data={prayerLists} />

            <Footer />
        </>
    )
}

export default DateCollection;