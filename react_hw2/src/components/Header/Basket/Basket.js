import styles from './Basket.module.css'
import { Link } from 'react-router-dom'

export const Basket = () => {
    return (<>
        <div className={styles.basket}>
            <Link to='/' className={styles.basketReturn}> &lt;	к выбору блюда</Link>

            <span className={styles.basketCategory}>КОРЗИНА<span className={styles.basketNumber}> (в корзине 3 товара)</span></span>
        </div >
        <div className={styles.basketContainer}>
            <div className={styles.basketContent}>
                Basket
            </div>
        </div>
    </>
    )
}