import React, { useEffect, useState, } from 'react';
import { Link, } from "react-router-dom";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <Link to="/friday">
            <div class = {scrollPosition < 10 ? "headWrapperDefault" : "headWrapperScrollDown"}>
                <div class="pageHeader">금요기도회</div> 
                {/* <div class="pageHeaderUnderBar" /> */}
            </div>
            {/* <div class="headWrapper">
                <div class="pageHeader">금요기도회</div>
            </div> */}
        </Link>
    )
};

export default Header;