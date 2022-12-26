import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from '../../../img/logo.svg';

const Navbar = () => {
    let navigate = useNavigate();
    let location = useLocation();
    
    
    const [open, setOpen] = useState(false);
    
    function openBurger() {
        if (open) {
            setOpen(false);
            document.querySelector('body').style.overflowY = 'auto';
        } else {
            setOpen(true);
            document.querySelector('body').style.overflowY = 'hidden';
        }
    }

    function closeBurger() {
        setOpen(false);
        document.querySelector('body').style.overflowY = 'auto';
    }

    function scrollIntoView(e) {
        e.preventDefault();
        let elem = document.querySelector(e.target.getAttribute("href"));
        if(elem) {
            elem.scrollIntoView({block: "start", behavior: "smooth"});
            if (open) {
                setOpen(false);
                document.querySelector('body').style.overflowY = 'auto';
            }
        }
    }

    return (
        <nav className='navigation'>
            <div className="navigation__inner container">
                <div className="logo" onClick={e=> navigate("/", { replace: true })}><img src={Logo} alt="img" /></div>
                <ul className={open ? 'menu active' : 'menu'}>
                    <li className={location.pathname === '/' ? "menu__item active" : "menu__item"}><Link onClick={e=> closeBurger()} to={'/'}>Главная</Link></li>
                    <li className="menu__item"><a onClick={e => scrollIntoView(e)} href="#howtoplay">Как начать играть</a></li>
                    <li className="menu__item"><a onClick={e => scrollIntoView(e)} href="#about">О нас</a></li>
                    <li className="menu__item"><Link to={'/forum'}>Форум</Link></li>
                    <li className={location.pathname === '/donate' ? "menu__item active" : "menu__item"}><Link onClick={e=> closeBurger()} to={'/donate'}>Донат</Link></li>
                    <li className={location.pathname === '/vk' ? "menu__item active" : "menu__item"}><Link onClick={e=> closeBurger()} to={'/vk'}>VK</Link></li>
                </ul>
                <button onClick={e=>openBurger()} className={open ? 'burger active' : 'burger'}><span></span></button>
            </div>
        </nav>
    );
}

export default Navbar;