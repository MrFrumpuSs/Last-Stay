import React from 'react'
import styles from './Social.module.scss'
import Title from '../UI/Title/Title'
import SocialItem from '../SocialItem/SocialItem'
import Footer from '../UI/Footer/Footer'
import Vk from '../../icons/Vk'
import Discord from '../../icons/Discord'

import Human1 from '../../img/social/1.webp'
import Human2 from '../../img/social/2.webp'

const Social = () => {
    return (
        <section className={styles.social}>
            <div className={[styles.inner, 'container'].join(' ')}>
                <Title className={styles.title}>Мы в социальных сетях</Title>
                <SocialItem icon={<Vk width='62' height='62' color="#fff"/>} title="Официальное сообщество" image={Human1} link="https://vk.com/last_stay"></SocialItem>
                <SocialItem icon={<Discord width='62' height='62' color="#fff"/>} title="Заводи новых друзей" image={Human2} link="https://google.com"></SocialItem>
            </div>
            <Footer className={styles.footer}></Footer>
        </section>
    )
}

export default Social