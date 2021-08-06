import React, { useEffect, useState, } from 'react';
import '../../index.css';
import ApiService from '../../services/apiService';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Edit = ({ match }) => {

    const targetPrayerListId = match.params.id;
    const initialPrayerListState = {
        name: '',
        content: '',
    };

    const [prayerList, setPrayerList] = useState(initialPrayerListState);
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        setPrayerList({ ...prayerList, [name]: value });
      };


    const getTargetPrayerList = (targetPrayerListId) => {
        ApiService.getPrayerListById(targetPrayerListId)
            .then(res => {
                setPrayerList(res.data.value);
                console.log(res.data);
            })
    }
    const editPrayerList = (targetPrayerListId) => {
        ApiService.updatePrayerList(targetPrayerListId, prayerList)
            .then(res => {
                window.location.reload();
                console.log(res.data.value);
            })
            .catch(e => {
                console.log(e);
            })
            setPrayerList({
                name: '',
                content: '',
            })
    }

    useEffect(() => {
        getTargetPrayerList(targetPrayerListId);
    }, [])

    return (
        <>
            <Header />

            <div class="inputPageTitle">기도 제목 수정하기</div>

            <div class="inputFormWrapper">
                <div class="inputForm">
                    <input class="inputName" 
                        value={prayerList.name} 
                        name="name" 
                        onChange={handleInputChange}/>
                    <textarea class="inputContent" 
                        value={prayerList.content} 
                        name="content" 
                        onChange={handleInputChange}/>
                    <button class="submitBtn" onClick={() => {editPrayerList(targetPrayerListId, prayerList);}}>수정완료</button>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Edit;