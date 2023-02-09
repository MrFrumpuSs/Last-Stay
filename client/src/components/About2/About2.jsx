import React, { useState } from 'react'
import styles from './About2.module.scss'
import Title from '../UI/Title/Title'
import Border from '../../img/border.svg'
import Border2 from '../../img/border2.svg'
import Image1 from '../../img/about/1.webp'
import Image2 from '../../img/about/2.webp'
import Image3 from '../../img/about/3.webp'
import About2Item from '../About2Item/About2Item' 
import Masks from '../Masks/Masks'

const About2 = () => {
    const [items, setItem] = useState(
        [
            {img: <image style={{'y': 'calc(-50% + 50px)', 'x': '-50px'}} mask="url(#mask0_45_115)" href={Image1} ></image>, title: 'Выжить любой ценой', text:['Окунувшись в игровой процесс, вам предстоит выжить в мире зомби апокалипсиса. Безжизненные города, брошенные дома аэродромы, кругом бродят зомби.', 'Входя в игру, вы становитесь участником этого апокалипсиса. Ваша основная задача — выжить, и чаще всего — любой ценой.']},
            {img:  <image style={{'y': 'calc(-50% + 50px)', 'x': '-70px'}} mask="url(#mask0_45_111)" href={Image2} ></image>, title: 'Без права на ошибку', text:['Первоначально, на спине вашего персонажа висит рюкзак, в котором имеется: бутылка с водой, сухой паёк, бинты.', 'Остальные вещи вам предстоит раздобыть самостоятельно. Стоит всегда учитывать, что в этой игре нет сохранения, если вас убьют, вы потеряете всё, что нашли.']},
            {img: <image style={{'y': 'calc(-50% + 50px)', 'x': '-50px'}} mask="url(#mask0_45_115)" href={Image3} ></image>, title: 'Тачки и оружие', text:['Самое ценное в игре, это оружие и машины. Машины позволяют вам быстро передвигаться по карте, экономя время и защищая от зомби.', 'Оружие в свою очередь служит для вашей безопасности и охоты.']}
        ]
    );
    return (
        <section className={styles.about} id="about">
            <div className={[styles.inner, 'container --big'].join(' ')}>
                <Title className={styles.title}>О проекте</Title>
                <div className={styles.flex}>
                    {items.map((item, index)=>
                        <About2Item key={index} reverse={index % 2 != 0 ? true : false} data={item}></About2Item>
                    )}
                </div>
                <Masks></Masks>
            </div>
        </section>
    )
}

export default About2