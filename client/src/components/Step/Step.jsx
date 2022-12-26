import React from 'react'
import styles from './Step.module.scss'
import Button from '../UI/Button/Button'


const Step = ({step, title, description, btnName, link, background, className, href}) => {
    
    function scrollIntoView(e) {
        e.preventDefault();
        if(href) {
            let elem = document.querySelector(e.target.getAttribute("href"));
            if(elem) {
                elem.scrollIntoView({block: "start", behavior: "smooth"});
            }
        } else {
            window.open(link, '_blank')
        }
    }

   return (
       <div className={[styles.step, className].join(' ')} style={{'background': 'linear-gradient(0deg, rgba(24, 15, 14, 0.92), rgba(24, 15, 14, 0.92)), url('+background+')'}}>
            <span className={styles.number}>Шаг {step}</span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Button onClick={e => scrollIntoView(e)} className={styles.btn} href={href}>{btnName}</Button>
       </div>
   )
}

export default Step