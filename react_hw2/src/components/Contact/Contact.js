import styles from './Contact.module.css'
import phone from '../../assets/images/phone.svg'

export const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contactImg}>
                <img className={styles.imgSize} src={phone} alt='phone'></img>
            </div>
            <div className={styles.contact}>
                <span className={styles.contactTitle}>Контакты:
                </span>
                <span className={styles.contactPhone}>
                    +7 (917) 510-57-59</span>
            </div>
        </div>
    )
}