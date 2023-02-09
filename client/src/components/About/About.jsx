import React from 'react'
import styles from './About.module.scss'
import Title from '../UI/Title/Title'
import Image from '../../img/about.webp'

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={[styles.inner, 'container'].join(' ')}>
                <div className={styles.left}>
                    <Title className={styles.title}><span>Last stay</span> - это захватывающий проект (SAMP) в  жанре DayZ.</Title>
                    <p className={styles.p}>Окунувшись в игровой процесс, вам предстоит выжить в мире зомби апокалипсиса. Безжизненные города, брошенные дома, аэродромы, кругом бродят зомби.</p>
                </div>
                <div className={styles.right}>
                    <img src={Image} alt="image" />
                </div>
            </div>
        </section>
    )
}

export default About