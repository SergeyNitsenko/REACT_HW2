import { Link } from 'react-router-dom'
import styles from './ButtonBasket.module.css'

export const Basket = () => {
    return (
        <Link to='/Basket' state ='true' className={styles.buttonBasket}>
            <div className={styles.buttonBasketTitle}>Корзина</div>
            <div className={styles.basketNumber}>4</div>
        </Link>
    )
}