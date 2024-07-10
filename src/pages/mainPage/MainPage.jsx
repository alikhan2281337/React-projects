import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";
import Counter from "../../components/count/Counter";
import ModalWindow from "../../components/modalWindow/ModalWindow";

const MainPage = () => {
    const [show, setShow] = useState(false)
    // show в начале равна useState(false), после изменения при помощи setShow то useState меняется и он
        // перерендеривается

    console.log(show, 'в начале')
    const handleShow = () => {
        console.log(show, 'handleShow')
        // setShow(!show) так писать не рекомендуеца
        setShow(prev => !prev) // ! - делает отрицательно


        console.log(show, 'handleShow')
    }



    return (
        <div>
            <Header/>
            <ModalWindow/>
            <Counter/>
            <h1>Hello World</h1>

            <User name={'Alikhan'} age={18} email={'alihanaji@gmail.com'}/>
            <Footer/>
            <br/>
            <div>Show</div>
            <button onClick={handleShow}>Open</button>
            {
                show && <div style={{backgroundColor: "black"}}>Modal window</div> // && если true то показывает а если ?? тоже самое
                // show ? <div>Modal window</div> : ''
            }
        </div>
    );
};

export default MainPage;