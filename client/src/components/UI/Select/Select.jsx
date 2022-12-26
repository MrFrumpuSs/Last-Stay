import React from 'react'
import styles from './Select.module.scss'
import cuid from 'cuid';


const Input = ({className, label, ico, options, ...props}) => {

    let uid = cuid();

    return (
       <div className={[styles.select_box, className].join(' ')}>
            <label className={styles.label} htmlFor={uid}>{label}</label>
            <span className={styles.select_wrapper}>
                <select className={styles.select} {...props} id={uid}>
                    {options.map(option=>
                        <option key={option} value={option.value}>{option.name}</option>
                    )}
                </select>
                {ico}
            </span>
       </div>
    )
}

export default Input