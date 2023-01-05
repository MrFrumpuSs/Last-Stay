import React from 'react'
import styles from './Info.module.scss'
import styles2 from '../components/RichText/RichText.module.scss'
import Title from '../components/UI/Title/Title'
import RichText from '../components/RichText/RichText'
import Footer from '../components/UI/Footer/Footer'

const InformationSecurity = () => {
    return (
        <>
            <section className={styles.info_page}>
                <div className={[styles.inner, 'container'].join(' ')}>
                    <Title className={styles.title}>Информационная безопасность</Title>
                    <RichText>
                        <p>Оплатить заказ можно банковскими картами Visa, Master Card, «Мир» или через платежные системы Apple Pay. Чтобы оплатить покупку, вы будете перенаправлены на сервер платежной системы Unitpay, на котором нужно ввести необходимые данные. При оплате банковской картой безопасность платежей гарантирует процессинговый центр Unitpay.</p>
                        <p>Платежная система Unitpay обладает подтвержденным сертификатом соответствия требованиям стандарта PCI DSS в части хранения, обработки и передачи данных держателей карт. Стандарт безопасности банковских карт PCI DSS поддерживается международными платежными системами, включая MasterCard и Visa, Inc. Система Unitpay также является участником программы непрерывного соответствия Compliance Control PCI DSS Compliance Process (P.D.C.P.). Ваши конфиденциальные данные, необходимые для оплаты (реквизиты карты, регистрационные данные и др.), не поступают в интернет-магазин — их обработка производится на стороне процессингового центра Unitpay и полностью защищена.</p>
                    </RichText>
                </div>
            </section>
            <Footer className={styles.footer}></Footer>
        </>
    )
}

export default InformationSecurity