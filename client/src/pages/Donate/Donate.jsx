import React from 'react'
import styles from './Donate.module.scss'
import Title from '../../components/UI/Title/Title'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import Button from '../../components/UI/Button/Button'
import Footer from '../../components/UI/Footer/Footer'
import User from '../../icons/User'
import Ruble from '../../icons/Ruble'
import Server from '../../icons/Server'
import ArrowRight from '../../icons/ArrowRight'
import ManImage from '../../img/donate-man.webp'

const Donate = () => {
    return (
        <>
            <section className={styles.donate}>
                <div className={[styles.inner, 'container'].join(' ')}>
                    <Title className={styles.title}>Пополнение счета</Title>
                    <div className={styles.content}>
                        <div className={styles.form}>
                            <Input className={styles.form_item} type='text' placeholder='Nick_Name' label='Никнейм' ico={<User color='#AD1601' width='24' height='24'></User>}></Input>
                            <Select className={styles.form_item} label='Сервер' options={[{value: 'srv01', name: 'Server 01'}, {value: 'srv02', name: 'Server 02'}]} ico={<Server color='#AD1601' width='24' height='24'></Server>}></Select>
                            <Input className={styles.form_item} type='number' placeholder='100' label='Сумма пополнения' ico={<Ruble color='#AD1601' width='24' height='24'></Ruble>}></Input>
                            <Button className={styles.btn}>Пополнить счет<ArrowRight color='#fff' width='30' height='30'></ArrowRight></Button>
                        </div>
                        <div className={styles.image}>
                            <img src={ManImage} alt="man" title='man'/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer className={styles.footer}></Footer>
        </>
    )
}

export default Donate