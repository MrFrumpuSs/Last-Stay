import React, { useState } from 'react'
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
import Coupon from '../../icons/Coupon'
import ManImage from '../../img/donate-man.webp'

const Donate = () => {

    const [data, setData] = useState({
        nickname: '',
        server: 'srv1',
        sum: '',
        promo: ''
    });

    const [errors, setErrors] = useState({
        nickname: false,
        sum: false
    })

    const validate = () => {
        if(data.nickname.length === 0) {
            setErrors({...errors, nickname: true});
            return false;
        } else if(data.sum.length === 0) {
            setErrors({...errors, sum: true});
            return false;
        }

        return true;
    }

    const redirectToDonate = () => {
        setErrors({sum: false, nickname: false});
        if(validate()) {
            const DonateURL = `https://last-stay.ru:8080/api/donate?nickname=${data.nickname}&sum=${data.sum}&promo=${data.promo}`;
            const newWindow = window.open(DonateURL, '_blank');
        }
    }

    return (
        <>
            <section className={styles.donate}>
                <div className={[styles.inner, 'container'].join(' ')}>
                    <Title className={styles.title}>Пополнение счета</Title>
                    <div className={styles.content}>
                        <div className={styles.form}>
                            <Input error={errors.nickname} errortxt='Поле не может быть пустым' className={styles.form_item} value={data.nickname} onChange={e=> setData({...data, nickname: e.target.value})} type='text' placeholder='Nick_Name' label='Никнейм' ico={<User color='#AD1601' width='24' height='24'></User>}></Input>
                            <Select className={styles.form_item} label='Сервер' options={[{value: 'srv01', name: 'Server 01'}, {value: 'srv02', name: 'Server 02'}]} ico={<Server color='#AD1601' width='24' height='24'></Server>}></Select>
                            <Input error={errors.sum} errortxt='Поле не может быть пустым' className={styles.form_item} value={data.sum} onChange={e=> setData({...data, sum: e.target.value})} type='number' placeholder='100' label='Сумма пополнения' ico={<Ruble color='#AD1601' width='24' height='24'></Ruble>}></Input>
                            <Input className={styles.form_item} value={data.promo} onChange={e=> setData({...data, promo: e.target.value})} type='text' placeholder='Не обязательно' label='Промокод' ico={<Coupon color='#AD1601' width='24' height='24'></Coupon>}></Input>
                            <Button onClick={e=> redirectToDonate()} className={styles.btn}>Пополнить счет<ArrowRight color='#fff' width='30' height='30'></ArrowRight></Button>
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