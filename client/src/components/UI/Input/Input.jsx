import React from 'react'
import styles from './Input.module.scss'
import cuid from 'cuid';


const Input = ({type, className, label, placeholder, ico, ...props}) => {

    let uid = cuid();

    return (
       <div className={[styles.input_box, className].join(' ')}>
            <label className={styles.label} htmlFor={uid}>{label}</label>
            <span className={styles.input_wrapper}>
                <input className={styles.input} {...props} id={uid} type={type} placeholder={placeholder}/>     
                {ico}
            </span>
       </div>
    )
}

export default Input