
import styles from './AddBasket.module.css'


export const AddBasket = () => {

    return (
        <div className={styles.addBasket}>
            <button className={styles.add}>-</button>
            <span className={styles.addBasketPrice}> &#8381;</span>
            <button className={styles.delete}>+</button>
        </div>
    )
}