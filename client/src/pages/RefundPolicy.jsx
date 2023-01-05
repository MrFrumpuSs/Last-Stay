import React from 'react'
import styles from './Info.module.scss'
import styles2 from '../components/RichText/RichText.module.scss'
import Title from '../components/UI/Title/Title'
import RichText from '../components/RichText/RichText'
import Footer from '../components/UI/Footer/Footer'

const RefundPolicy = () => {
    return (
        <>
            <section className={styles.info_page}>
                <div className={[styles.inner, 'container'].join(' ')}>
                    <Title className={styles.title}>Политика возврата платежей</Title>
                    <RichText>
                        <p className={styles2.title}>ПОЛИТИКА ВОЗВРАТА ДЕНЕЖНЫХ СРЕДСТВ</p>
                        <p>Оплаченное Лицензиатом право использования дополнительного функционала Сайта считается предоставленным в полном объёме с момента отображения в соответствующем разделе Сайта определенного Лицензиатом количества Donate-рублей и возможности воспользоваться ими в рамках игровой механики. В таком случае возврат денежных средств не производится. </p>
                        <p>Единственным основанием для возврата Лицензиату оплаченных им денежных средств является невозможность воспользоваться Donate-рублями в рамках игровой механики в течение 7 (семи) дней с момента получения Лицензиаром денежных средств от Лицензиата.</p>
                    </RichText>
                </div>
            </section>
            <Footer className={styles.footer}></Footer>
        </>
    )
}

export default RefundPolicy