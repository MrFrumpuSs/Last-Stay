import React from 'react'
import Title from '../../components/UI/Title/Title';
import Step from '../Step/Step';
import styles from './HowToPlay.module.scss'
import Step1 from '../../img/howtoplay/1.svg'
import Step2 from '../../img/howtoplay/2.svg'
import Step3 from '../../img/howtoplay/3.svg'
import Dots from '../../img/dots2.svg'

const HowToPlay = () => {
    return (
        <section className={styles.howtoplay} id="howtoplay">
            <div className={[styles.inner, 'container'].join(' ')}>
                <Title className={styles.title}>Как начать играть</Title>
                <div className={styles.steps}>
                    <Step img={Step1} title='GTA: San Andreas' description='Скачайте и установите чистую GTA SA на свой компьютер, запомните путь установки!' btnName='Скачать' link='https://google.com' background={Step1}></Step>
                    <Step img={Step2} title='Клиент GTA SAMP' description='После установки игры, скачайте и установите SAMP клиент по пути где у вас находится GTA: San Andreas' btnName='Скачать' link='https://google.com' background={Step2}></Step>
                    <Step img={Step3} title='Подключение к серверу' description='Выберите сервер, добавьте в samp клиент и заходите к нам!' btnName={<>Выбрать <span>сервер</span></>} background={Step3} href="#hero"></Step>
                </div>
            </div>
            <img className={styles.dots} src={Dots} alt="dots"/>
        </section>
    )
}

export default HowToPlay