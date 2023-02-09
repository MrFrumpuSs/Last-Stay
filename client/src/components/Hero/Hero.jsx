import React, { useRef } from 'react';
import styles from './Hero.module.scss'
import Man from '../../img/man.webp'
import MainTxt from '../../img/maintxt.svg'
import Spot from '../../img/spot.svg'
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
                <div className={styles.spot}>
                    <img src={Spot} alt="spot" />
                </div>
                <div className={styles.content}>
                    <div className={styles.main}>
                        <h1 className={styles.h1}><img src={MainTxt} alt="title" title='Твоя главная задача - выжить' /></h1>
                    </div>
                    <div className={styles.bottom}>
                        <Button onClick={e => scrollIntoView(e)} href='#howtoplay' className={styles.playBtn}>Начать игру</Button>
                        <div className={styles.servers}>
                            <div className={styles.server}>
                                <Copy onClick={e => copyText(e)} className={styles.copySrv} color="#FF0000" width='24' height='24'></Copy>
                                <div className={styles.circle}>1</div>
                                <div className={styles.server_content}>
                                    <p className={styles.server_title}>Server 01</p>
                                    <a ref={tst} href='samp://s1.last-stay.online:7777' className={styles.server_ip}>s1.last-stay.online:7777</a>
                                </div>
                            </div>
                            <div className={styles.server}>
                                <Copy onClick={e => copyText(e)} className={styles.copySrv} color="#FF0000" width='24' height='24'></Copy>
                                <div className={styles.circle}>2</div>
                                <div className={styles.server_content}>
                                    <p className={styles.server_title}>Server 02</p>
                                    <a ref={tst} href='samp://s2.last-stay.online:7777' className={styles.server_ip}>s2.last-stay.online:7777</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.man_img}><img src={Man} alt="img-man" /></div>
        </section>
    );
}

export default Hero;