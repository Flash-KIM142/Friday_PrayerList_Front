import React, { useState, useEffect } from 'react';
import '../../index.css';
import ApiService from '../../services/apiService';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Copy = ({ match }) => {

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
    
    const createPrayerList = () => {
        var data = {
            name: prayerList.name,
            content: prayerList.content,
        }

        ApiService.createPrayerList(data)
      .then(response => {
        setPrayerList({
          id: response.data.id,
          content: response.data.content,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
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
            <div class="pageWrapper">
                <Header />
                <div class="inputPageTitle">복사해서 제출하기</div>

                <div class="inputFormWrapper">
                    <div class="inputForm">
                        <input class="inputName" 
                            value={prayerList.name} 
                            name="name" 
                            placeholder="이름" 
                            onChange={handleInputChange}/>
                        <textarea class="inputContent" 
                            value={prayerList.content} 
                            name="content" 
                            placeholder="1. 날마다 주님과 생명의 교제 나누도록 &#13;&#10;2. 서로 사랑하는 제자 되도록 &#13;&#10;3. ..." 
                            onChange={handleInputChange}/>

                        <button class="submitBtn" onClick={() => {
                            createPrayerList();
                        }}>새로 제출</button>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Copy;