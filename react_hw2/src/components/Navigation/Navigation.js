import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <Link to='/Холодные_закуски' className={styles.navigationLink}>Холодные закуски</Link>
            <Link to='/Горячие_закуски' className={styles.navigationLink}>Горячие закуски</Link>
            <Link to='/Мясные_блюда' className={styles.navigationLink}>Мясные блюда</Link>
            <Link to='/Супы' className={styles.navigationLink}>Супы</Link>
            <Link to='/Рыбные_блюда' className={styles.navigationLink}>Рыбные блюда</Link>
            <Link to='/Гриль_меню' className={styles.navigationLink}>Гриль меню</Link>
            <Link to='/Фирнменные_блюда' className={styles.navigationLink}>Фирнменные блюда</Link>
            <Link to='/Напитки' className={styles.navigationLink}>Напитки</Link>
        </nav>
    )
}