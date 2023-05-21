import styles from './Footer.module.css'
import { Logo } from '../Header/Logo/Logo'
import arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom'
import { menuFooter } from '../../data/menuFooter'

export const Footer = () => {

    return (
        <>

            <div className={styles.container}>
                <Link to='#' className={styles.buttonReturn}><img src={arrow} alt='arrow'></img></Link>
                <div className={styles.infoFooter}>
                    <Logo />
                    <span className={styles.rights}>© ООО СК «АПШЕРОН» Все права защищены. 2010-2020</span>
                    <Link to='#' className={styles.infoLink}>Пользовательское соглашение</Link>
                    <Link to='#' className={styles.infoLink}>Карта сайта </Link>
                    <Link to='#' className={styles.infoLink}>Политика конфиденциальности</Link>
                </div>


                <div className={styles.footerLinks}>
                    {
                        menuFooter.map(item => <Link to={item.url} key={item.id} className={styles.footerLink} >{item.title}</Link>)
                    }

                    {/* <Link to='#' className={styles.footerLink}>О ресторане</Link>
                    <Link to='#' className={styles.footerLink}>Условия доставки</Link>
                    <Link to='#' className={styles.footerLink}>Возврат товара</Link>
                    <Link to='#' className={styles.footerLink}>Акции</Link> */}
                </div>


            </div>
        </>
    )
}