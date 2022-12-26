import React from 'react'
import Title from '../../components/UI/Title/Title';
import Step from '../Step/Step';
import styles from './HowToPlay.module.scss'
import Step1 from '../../img/howtoplay/1.webp'
import Step2 from '../../img/howtoplay/2.webp'
import Step3 from '../../img/howtoplay/3.webp'

const HowToPlay = () => {
    return (
        <section className={styles.howtoplay} id="howtoplay">
            <div className={[styles.inner, 'container'].join(' ')}>
                <Title className={styles.title}>Как начать играть</Title>
                <div className={styles.steps}>
                    <Step step='1' title='GTA: San Andreas' description='Скачайте и установите чистую GTA SA на свой компьютер, запомните путь установки!' btnName='Скачать' link='https://google.com' background={Step1}></Step>
                    <Step className={styles.middle_step} step='2' title='Клиент GTA SAMP' description='После установки игры, скачайте и установите SAMP клиент по пути где у вас находится GTA: San Andreas' btnName='Скачать' link='https://google.com' background={Step2}></Step>
                    <Step step='3' title='Подключение к серверу' description='Выберите сервер, добавьте в samp клиент и заходите к нам!' btnName='Выбрать сервер' background={Step3} href="#hero"></Step>
                </div>
            </div>
        </section>
    )
}

export default HowToPlay