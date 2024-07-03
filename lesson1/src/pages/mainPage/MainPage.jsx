import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <h1>Hello World</h1>
            <User name={'Alikhan'} age={18} email={'alihanaji@gmail.com'}/>
            <Footer/>

        </div>
    );
};

export default MainPage;