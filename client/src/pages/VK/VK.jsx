import React, {useState, useEffect} from 'react'
import styles from './VK.module.scss'
import Title from '../../components/UI/Title/Title'
import Select from '../../components/UI/Select/Select'
import Button from '../../components/UI/Button/Button'
import Footer from '../../components/UI/Footer/Footer'
import ManImage from '../../img/vk-man.webp'
import Server from '../../icons/Server'
import ArrowRight from '../../icons/ArrowRight'
import Exit from '../../icons/Exit'
import Cookies from 'js-cookie'

const VK = () => {

    const [data, setData] = useState({
        title: '',
        form: true,
    })

    useEffect(() => {
        if(Cookies.get('id') !== undefined) {
            setData({form: false, title: Cookies.get('fname') + ' ' + Cookies.get('sname')})
        } else {
            setData({form: true, title: 'Привязать VK'})
        }
    }, []);
    

    const redirectToVkAuth = () => {
        const vkLoginURL = "https://last-stay.ru:8080/api/auth/vk";
        const newWindow = window.open(vkLoginURL, '_blank', 'width=500, height=600');
        let timer = setInterval(() => {
            if(Cookies.get('id') !== undefined) {
                setData({form: false, title: Cookies.get('fname') + ' ' + Cookies.get('sname')})
                newWindow.close();
                clearInterval(timer);
            }
        }, 1000);
    }
    const ExitVk = () => {
        Cookies.remove('id');
        Cookies.remove('fname');
        Cookies.remove('sname');
        Cookies.remove('code');
        setData({form: true, title: 'Привязать VK'})
    }
    return (
        <>
            <section className={styles.vk}>
                <div className={[styles.inner, 'container'].join(' ')}>
                    <Title className={styles.title}>{data.title}</Title>
                    <div className={styles.content}>
                        {data.form
                            ?
                            <div className={styles.form}>
                                <Select className={styles.form_item} label='Сервер' options={[{value: 'srv01', name: 'Server 01'}, {value: 'srv02', name: 'Server 02'}]} ico={<Server color='#AD1601' width='24' height='24'></Server>}></Select>
                                <Button onClick={e=> redirectToVkAuth()} className={styles.btn}>Привязать VK<ArrowRight color='#fff' width='30' height='30'></ArrowRight></Button>
                            </div>
                            :
                            <div className={styles.form}>
                                <h2 className={styles.code}>Код: {Cookies.get('code')}</h2>
                                <p className={styles.txtucode}>Введите данный код в игре</p>
                                <Button onClick={e=> ExitVk()} className={styles.btn}>Выйти<Exit color='#fff' width='30' height='30'></Exit></Button>
                            </div>
                        }
                        
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

export default VK