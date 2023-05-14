import styles from './Banner.module.css'

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                ДОСТАВКА ВКУСНЕЙШИХ
                БЛЮД ЗА 60 МИНУТ
            </div>
            <span className={styles.bannerSpan}>ЕЩЁ НЕ ПРОБОВАЛ?</span>
        </div>
    )
}