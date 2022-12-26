import React from 'react'
import styles from './About.module.scss'
import Title from '../UI/Title/Title'


const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={[styles.inner, 'container'].join(' ')}>
                <Title className={styles.title}>О проекте</Title>
                <p className={styles.p}>Last Stay - это уникальный и захватывающий проект GTA San Andreas (SAMP) в уникальном жанре DayZ.</p>
                <p className={styles.p}>Окунувшись в игровой процесс, вам предстоит выжить в мире зомби апокалипсиса. Безжизненные города, брошенные дома, аэродромы, кругом бродят зомби.</p>
                <p className={styles.p}>Входя в игру, вы становитесь участником этого апокалипсиса. Ваша основная задача — выжить, и чаще всего — любой ценой.</p>
                <p className={styles.p}>Первоначально, на спине вашего персонажа висит рюкзак, в котором имеется: бутылка с водой, сухой паёк, бинты.</p>
                <p className={styles.p}>Остальные вещи вам предстоит раздобыть самостоятельно. Стоит всегда учитывать, что в этой игре нет сохранения, если вас убьют, вы потеряете всё, что нашли.</p>
                <p className={styles.p}>Самое ценное в игре, это оружие и машины. Машины позволяют вам быстро передвигаться по карте, экономя время и защищая от зомби.</p>
                <p className={styles.p}>Оружие в свою очередь служит для вашей безопасности и охоты.</p>
            </div>
        </section>
    )
}

export default About