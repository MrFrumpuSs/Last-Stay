import React, { useRef } from 'react';
import styles from './Hero.module.scss'
import Girl from '../../img/girl.webp'
import Figure from '../../img/figure.webp'
import Vk from '../../icons/Vk';
import Play from '../../icons/Play';
import Copy from '../../icons/Copy';
import Button from '../UI/Button/Button';

const Hero = () => {

    const tst = useRef(null);
    
    const copyText = (e) => {
        e.target.classList.add(styles.active);
        navigator.clipboard.writeText(e.target.parentNode.querySelector('a').innerText);
    }

    function scrollIntoView(e) {
        e.preventDefault();
        let elem = document.querySelector(e.target.getAttribute("href"));
        if(elem) {
            elem.scrollIntoView({block: "start", behavior: "smooth"});
        }
    }

    return (
        <section id="hero" className={styles.hero}>
            <div className={[styles.inner, 'container'].join(' ')}>
                <div className={styles.image}>
                    <img src={Girl} alt="girl" title='girl'/>
                </div>
                <div className={styles.content}>
                    <div className={styles.main}>
                        <h1 className={styles.h1}>Добро пожаловать</h1>
                        <h2 className={styles.h2}>На проект <span>Last Stay</span></h2>
                        <div className={styles.btns}>
                            <a href="https://vk.com/last_stay" target='_blank' className={styles.vk} rel='noreferrer'><Vk color="#D84343" width="46" height="46"></Vk></a>
                            <Button onClick={e => scrollIntoView(e)} href='#howtoplay' className={styles.playBtn}><Play color='#fff' width='24' height='24'></Play>Начать игру</Button>
                        </div>
                    </div>
                    <div className={styles.servers}>
                        <div className={styles.server}>
                            <Copy onClick={e => copyText(e)} className={styles.copySrv} color="#ADADAD" width='24' height='24'></Copy>
                            <div className={styles.circle}>1</div>
                            <div className={styles.server_content}>
                                <p className={styles.server_title}>Server 01</p>
                                <a ref={tst} href='samp://s1.last-stay.online:7777' className={styles.server_ip}>s1.last-stay.online:7777</a>
                            </div>
                        </div>
                        <div className={styles.server}>
                            <Copy onClick={e => copyText(e)} className={styles.copySrv} color="#ADADAD" width='24' height='24'></Copy>
                            <div className={styles.circle}>2</div>
                            <div className={styles.server_content}>
                                <p className={styles.server_title}>Server 02</p>
                                <a ref={tst} href='samp://s2.last-stay.online:7777' className={styles.server_ip}>s2.last-stay.online:7777</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles.figure} src={Figure} alt="figure" />
        </section>
    );
}

export default Hero;