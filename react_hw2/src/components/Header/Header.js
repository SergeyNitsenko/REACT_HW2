import styles from './Header.module.css'
import { Logo } from '../../components/Header/Logo/Logo.js'
import { Basket } from './ButtonBasket/ButtonBasket'
import location from '../../assets/images/location.svg'
import search from '../../assets/images/search.svg'
import { Contact } from '../../components/Header/Contact/Contact.js'

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <Logo />
                <div className={styles.input}>
                    <img className={styles.imgLocation} src={location} alt='location'></img>
                    <input className={styles.headerInput} placeholder='          Введите адрес доставки' type='text' ></input>
                    <img className={styles.imgSearch} src={search} alt='location'></img>
                </div>
                <Contact/>
                <Basket/>
            </div>

        </div>
    )
}