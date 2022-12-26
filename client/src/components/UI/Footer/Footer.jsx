import React from 'react'
import Logo from '../../../img/logo.svg'
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
            </div>
       </footer>
    )
}

export default Footer