import React from 'react'
import styles from './Title.module.scss'

const Title = ({children, className}) => {
   return (
       <h1 className={[styles.title, className].join(' ')}>{children}</h1>
   )
}

export default Title