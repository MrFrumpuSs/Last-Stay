import React from 'react'
import styles from './About2Item.module.scss'
import Border from '../../img/border.svg'
import Border2 from '../../img/border2.svg'

const About2Item = ({data, reverse}) => {
    return (
        <div className={styles.item}>
            <svg className={styles.image} viewBox="0 0 745 394">
                {data.img}
            </svg>
            <div className={styles.content}>
                <img src={reverse ? Border2 : Border} alt="border" />
                <p className={styles.text}>
                    <h1 className={styles.item_title}>{data.title}</h1>
                    {data.text.map((p, index)=>
                        <p key={index} className={styles.item_txt}>{p}</p>
                    )}
                </p>
            </div>
        </div>
    )
}

export default About2Item