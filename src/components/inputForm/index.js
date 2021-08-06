// routes 폴더의 write 의 return 문 중에 input 창 부분을 따로 컴포넌트화 시키려고 한다. 또 인자값 설정해주는 게 귀찮긴 하지만 이게 깔끔하다.import React, { useState, } from 'react';
import React, { useState, } from 'react';
import '../../index.css';
import ApiService from '../../services/apiService';

const InputForm = () => {
    const initialPrayerListState = {
        name: '',
        content: '',
    };

    const [prayerList, setPrayerList] = useState(initialPrayerListState);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setPrayerList({ ...prayerList, [name]: value });
      };

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

    return (
        <>
            <div class="inputPageTitle">기도 제목 작성하기</div>


            <div class="inputFormWrapper">
                <div class="inputForm">
                    <input class="inputName" 
                        value={prayerList.name} 
                        name="name" 
                        placeholder="이름" 
                        onChange={handleInputChange}/>

                    <textarea class="inputContent" 
                        rows="6"
                        value={prayerList.content} 
                        name="content" 
                        placeholder="1. 날마다 주님과 생명의 교제 나누도록 &#13;&#10;2. 서로 사랑하는 제자 되도록 &#13;&#10;3. ..." 
                        onChange={handleInputChange} />

                    <button class="submitBtn"
                        onClick={() => {
                            if(window.confirm('제출하시겠습니까?')===true){
                                createPrayerList();
                            }
                            else{
                                return false;
                            }
                    }}>제출하기</button>
                </div>
            </div>

        </>
    )
}

export default InputForm;