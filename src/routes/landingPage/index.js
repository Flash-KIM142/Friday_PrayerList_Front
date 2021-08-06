import React from 'react';
import '../../index.css';
import { Link, } from "react-router-dom";
import Footer from '../../components/footer';

const LandingPage = () => {
    return (
        <>
            <div class="pageWrapperLandingPage">
                    <div class="pageHeaderLandingPage">
                        <div>
                            <span class="crossBold">†</span>
                            <br/>
                            <span class="txtBold">Disciple DURU</span>
                        </div>
                    </div>
                    {/* <div class="pageHeaderUnderBarLandingPage"></div> */}
                <div class="landingPageGreeting">
                    <div>
                        <span class="txtBold">두루선교회</span>
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
                    <Link to="/home">
                        <button class="landingPageBtn">기도제목 보러가기 &#62;</button>
                    </Link>
                </div>

                {/* <div class="landingPageFooter">
                    <div class="landingPageFooterTitle">Footer</div>
                    <br/>
                    <div class="landingPageFooterDescription">© 2021 Deathnote.GG isn’t endorsed by Riot Games and doesn’t reflect the views 
or opinions of Riot Games or anyone officially involved in producing or managing 
League of Legends. League of Legends and Riot Games are trademarks or registered
 trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</div>
                </div> */}
                <Footer />
            </div>
        </>
    )
}

export default LandingPage;