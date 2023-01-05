import React from 'react'
import styles from './Info.module.scss'
import styles2 from '../components/RichText/RichText.module.scss'
import Title from '../components/UI/Title/Title'
import RichText from '../components/RichText/RichText'
import Footer from '../components/UI/Footer/Footer'

const PaymentMethods = () => {
    return (
        <>
            <section className={styles.info_page}>
                <div className={[styles.inner, 'container'].join(' ')}>
                    <Title className={styles.title}>Информация о способах оплаты</Title>
                    <RichText>
                        <p>К оплате принимаются платежные карты: VISA, MasterCard, Maestro, МИР. Для оплаты товара банковской картой при оформлении заказа в интернет-магазине выберите способ оплаты: банковской картой. При оплате заказа банковской картой, обработка платежа происходит на авторизационной странице банка, где Вам необходимо ввести данные Вашей банковской карты:</p>
                        <ul>
                            <li>Тип карты,</li>
                            <li>Номер карты,</li>
                            <li>Срок действия карты,</li>
                            <li>CVC2/CVV2 код.</li>
                        </ul>
                        <p>Если Ваша карта подключена к услуге 3D-Secure, Вы будете автоматически переадресованы на страницу банка, выпустившего карту, для прохождения процедуры аутентификации. Информацию о правилах и методах дополнительной идентификации уточняйте в Банке, выдавшем Вам банковскую карту.</p>
                    </RichText>
                </div>
            </section>
            <Footer className={styles.footer}></Footer>
        </>
    )
}

export default PaymentMethods