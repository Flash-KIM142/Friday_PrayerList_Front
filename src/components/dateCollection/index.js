import React, { useState } from 'react';
import '../../index.css';

const DateCollectionPrayerLists = ( {data} ) => {    
    return (
      <>
        <div class="reportsBody">
          {data.map((value, key) => {
            if(!data){
                <div class="dateCollectionNull">
                    <span>검색 결과가 없습니다.</span>
                </div>
            }

            return <DateCollectionPrayerListContent data={value} key={key} />;
          })}
        </div>
      </>
    )
  }

const DateCollectionPrayerListContent = ( {data} ) => {
    return (
        <>
            <div class="prayerListContent">
                <div class="prayerListContentText">
                    <div class="prayerListContentTextName">
                        <div>{data.name}</div>
                    </div>
                    <div class="prayerListContentDescription">
                        {data.content}
                    </div>
                </div>
            </div>
        </>
    );
  };


export default DateCollectionPrayerLists;