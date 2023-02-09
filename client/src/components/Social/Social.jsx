import React from 'react'
import styles from './Social.module.scss'
import Title from '../UI/Title/Title'
import SocialItem from '../SocialItem/SocialItem'

import Vk from '../../icons/Vk'
import Discord from '../../icons/Discord'

import Mans from '../../img/mans.webp'

const Social = () => {
    return (
        <section className={styles.social}>
            <div className={[styles.inner, 'container --big'].join(' ')}>
                <div className={styles.left}>
                    <img src={Mans} alt="mans" />
                </div>
                <div className={styles.right}>
                    <Title className={styles.title}>Присоединяйся к нам в социальных сетях</Title>
                    <div className={styles.flex}>
                        <SocialItem icon={<Vk width='100' height='100' color="#fff"/>} link="https://vk.com/last_stay"></SocialItem>
                        <SocialItem icon={<Discord width='100' height='100' color="#fff"/>} link="https://google.com"></SocialItem>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social