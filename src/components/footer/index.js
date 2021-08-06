import React from 'react';

const Footer = () => {
    return (
        <>
            {/* <div class="clear"/> */}
            {/* <div class="footerWrapper"> */}
            <div class="landingPageFooter">
                <div class="contactWrapper">
                    <div class="contactDescription">
                        이용에 불편한 점이 있으실 경우에 다음 메일로 연락 주시면 빠르게 해결하도록 하겠습니다.
                    </div>
                    <div class="contactDescriptionEmail">topqr123q@gmail.com</div>
                </div>
                <div class="copyrightWrapper">
                    {/* <div class="flashLogo">
                            <img alt="flashLogo" src="img/flash.png" style={{ height: "40px", width: "40px", }} />
                    </div> */}
                    Copyright © 2021 by &nbsp;
                    <div class="copyrightFlash">Flash</div>
                    , All rights reserved
                </div>
            </div>
        </>
    )
};

export default Footer;