import React from 'react'
import styles from './Step.module.scss'
import Button from '../UI/Button/Button'


const Step = ({title, img, description, btnName, link, background, className, href}) => {
    
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
       <div className={[styles.step, className].join(' ')}>
            <div className={styles.img}><img src={img} alt="ico" /></div>
            <span className={styles.step_round}></span>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Button onClick={e => scrollIntoView(e)} className={styles.btn} href={href}>{btnName}</Button>
            </div>
       </div>
   )
}

export default Step