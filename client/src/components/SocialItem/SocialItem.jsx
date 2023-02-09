import React from 'react'
import styles from './SocialItem.module.scss'
import Vk from '../../icons/Vk'
import ButtonT2 from '../UI/ButtonT2/ButtonT2'
const SocialItem = ({icon, link}) => {
    return (
        <div className={styles.item}>
            <a href={link} target="_blank" className={styles.icon}>{icon}</a>
        </div>
    )
}

export default SocialItem