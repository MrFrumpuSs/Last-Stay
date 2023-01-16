import React from 'react'
import Logo from '../../../img/logo.svg'
import Sbp from '../../../icons/Sbp';
import Mir from '../../../icons/Mir';
import MC from '../../../icons/MC';
import Visa from '../../../icons/Visa';
import VisaSecure from '../../../icons/VisaSecure';
import { Link, useNavigate } from "react-router-dom";

const Footer = ({className}) => {
    let navigate = useNavigate();
    
    function scrollIntoView(e) {
        e.preventDefault();
        let elem = document.querySelector(e.target.getAttribute("href"));
        if(elem) {
            elem.scrollIntoView({block: "start", behavior: "smooth"});
        }
    }

    return (
       <footer className={['footer', className].join(' ')}>
            <div className="footer_inner container">
                <div className="footer_logo"><img src={Logo} alt="logo"/></div>
                <p className="footer_allright">© 2022, Все права защищены</p>
                <ul className='footer-menu'>
                    <li className="footer-menu__item"><a onClick={e => scrollIntoView(e)} href="#hero">Главная</a></li>
                    <li className="footer-menu__item"><a onClick={e => scrollIntoView(e)} href="#howtoplay">Как начать играть</a></li>
                    <li className="footer-menu__item"><a onClick={e => scrollIntoView(e)} href="#about">О нас</a></li>
                    <li className="footer-menu__item"><Link to={'/forum'}>Форум</Link></li>
                    <li className="footer-menu__item"><Link to={'/donate'}>Донат</Link></li>
                    <li className="footer-menu__item"><Link to={'/vk'}>VK</Link></li>
                </ul>
                <ul className="footer-sec-menu">
                    <li className='footer-sec-menu__item'><Link to={'/public-offer'}>Публичная оферта</Link></li>
                    <li className='footer-sec-menu__item'><Link to={'/privacy-policy'}>Политика конфиденциальности</Link></li>
                    <li className='footer-sec-menu__item'><Link to={'/payment-methods'}>Информация о способах оплаты</Link></li>
                    <li className='footer-sec-menu__item'><Link to={'/information-security'}>Информационная безопасность</Link></li>
                    <li className='footer-sec-menu__item'><Link to={'/refund-policy'}>Политика возврата платежей</Link></li>
                </ul>
                <div className="footer-payments">
                    <Sbp className="footer-payments-item" width='70' color='#fff'></Sbp>
                    <Mir className="footer-payments-item" width='70'></Mir>
                    <MC className="footer-payments-item" width='70'></MC>
                    <Visa className="footer-payments-item" width='70'></Visa>
                    <VisaSecure className="footer-payments-item" width='70'></VisaSecure>
                </div>
                <p className='footer-contact'>Свяжитесь с нами по почте: <a href="mailto:fan-game@internet.ru">fan-game@internet.ru</a></p>
            </div>
       </footer>
    )
}

export default Footer