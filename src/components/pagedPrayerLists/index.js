import React, { useState, useEffect } from 'react';
import '../../index.css';
import { Link, } from "react-router-dom"
import ApiService from '../../services/apiService';

const pagedPrayerLists = ( props ) => {

    return (
      <>
        <div class="reportsBody">
          {props.lists && props.lists.map((value, key) => {
                return <PagedPrayerListContent data={value} key={key} />;
          })}
        </div>
      </>
    )
  }


const PagedPrayerListContent = ( {data} ) => {
    const [isClicked, setIsClicked] = useState(false);

    const deletePrayerList = (id) => {
        ApiService.deletePrayerList(id)
            .then(() => {
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <>
            {!isClicked ? (
                <div class="prayerListContent" onClick={() => setIsClicked(!isClicked)}>
                    <div class="prayerListContentText">
                        <div class="prayerListContentTextName" >
                            <div>{data.name}</div>
                            <div class="prayerListContentSimpleDate">
                                {data.mmDDCreatedTime}
                            </div>
                        </div>
                        <div class="prayerListContentPreview">
                            {data.content}
                        </div>
                    </div>
                    {/* <div class="prayerListContentBtn">
                        <img
                            class="prayerListContentBtnImg"
                            src="img/downArrow.png"
                            alt="닫혀있을때"
                        />
                    </div> */}
                </div>
            ) : (
                <div class="prayerListContent">
                    <div class="prayerListContentText">
                        <div class="prayerListContentTextName"  onClick={() => setIsClicked(!isClicked)}>
                            <div>{data.name}</div>
                                <div class="prayerListContentSimpleDate">
                                        {data.mmDDCreatedTime}
                                </div>
                        </div>
                        <div class="prayerListContentDescription"  onClick={() => setIsClicked(!isClicked)}>
                            {data.content}
                        </div>
                        <div class="prayerListContentDltEdtBtn">
                            {/* <span>{data.createdTime}</span> */}
                            <Link to={`/edit/${data.id}`}>
                                <button class="editBtn">수정</button>
                            </Link>

                            <button class="deleteBtn" 
                                onClick={() => {
                                if(window.confirm('정말 삭제하시겠습니까?')===true){
                                    deletePrayerList(data.id);
                                }
                                else{
                                    return false;
                                }
                                }}>삭제</button>
                        </div>
                    </div>
                    {/* <div class="prayerListContentBtn" onClick={() => setIsClicked(!isClicked)}>
                        <img
                            class="prayerListContentBtnImg"
                            src="img/upArrow.png"
                            alt="열려 있을때"
                        />
                    </div> */}
                </div>
            )}
        </>
    );
  };


export default pagedPrayerLists;