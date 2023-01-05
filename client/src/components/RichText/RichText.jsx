import React from 'react'
import styles from './RichText.module.scss'

const RIchText = ({children}) => {
    return (
       <div className={styles.rich_text}>
            {children}
       </div>
    )
}

export default RIchText