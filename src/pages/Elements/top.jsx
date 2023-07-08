import './styles.css';
import './simplelineicons/css/simple-line-icons.css';
import logoImg from '../Image/logo.png';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';



const Top = ()=> {
    return (
        <header id={'top'}>
            <div class={"container"}>
                <div id={"top"}>
                    <div id="social-icons">
                        <ul>
                            <li><i className={'icon-social-twitter'}></i></li>
                            <li><i className={'icon-social-facebook'}></i></li>
                            <li><i className={'icon-social-instagram'}></i></li>
                        </ul>
                    </div>
                    <div id="menu">
                        <ul>
                            <li>Inicio</li>
                            <li>Promoções</li>
                            <li>Novidades</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
    export default Top;