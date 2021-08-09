import React from 'react';
import '../../index.css';
import { Link, } from "react-router-dom";
import Footer from '../../components/footer';

const Friday = () => {
    return (
        <>
            <div class="pageWrapper">
                    <div class="pageHeaderLandingPage">
                        <div>
                            <span class="crossBold">†</span>
                            <br/>
                            <Link to="/">
                                <span class="txtBold">Disciple DURU</span>
                            </Link>
                            {/* <span class="txtBold">Disciple DURU</span> */}
                        </div>
                    </div>
                    {/* <div class="pageHeaderUnderBarLandingPage"></div> */}
                <div class="landingPageGreeting">
                    <div>
                        <span class="txtBold">금요기도회</span>
                        {/* <span>두루선교회</span> */}
                        에
                        <br />
                        오신 여러분을
                        <br />
                        환영합니다 😀
                    </div>
                </div>
                <div class="landingPageBtnWrapper">
                    <Link to="/write">
                        <button class="landingPageBtn">기도제목 쓰러가기 &#62;</button>
                    </Link>
                    <Link to="/read">
                        <button class="landingPageBtn">기도제목 보러가기 &#62;</button>
                    </Link>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Friday;