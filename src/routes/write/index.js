import React from 'react';
import '../../index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import InputForm from '../../components/inputForm';

const Write = () => {
    return (
        <>
            <div class="pageWrapper">
                <Header />
                <InputForm />
                <Footer />
            </div>
        </>
    )
}

export default Write;