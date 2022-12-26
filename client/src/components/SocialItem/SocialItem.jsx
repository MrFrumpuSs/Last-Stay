import React from 'react'
import styles from './SocialItem.module.scss'
import Vk from '../../icons/Vk'
import ButtonT2 from '../UI/ButtonT2/ButtonT2'
const SocialItem = ({icon, title, image, link}) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>{icon}</div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.image}><img src={image} alt="people" /></div>
            <ButtonT2 onClick={e => window.open(link, '_blank')}>Подписаться</ButtonT2>
        </div>
    )
}

export default SocialItem