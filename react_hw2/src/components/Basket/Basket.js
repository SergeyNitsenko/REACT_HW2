import styles from './Basket.module.css'

export const Basket = () => {
    return (
        <div className={styles.basket}>
            <div className={styles.basketTitle}>Корзина</div>
            <div className={styles.basketNumber}>4</div>
        </div>
    )
}