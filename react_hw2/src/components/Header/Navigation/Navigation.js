import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
import { menu } from '../../../data/menu.js'

export const Navigation = () => {
    return (
        <div className={styles.line}>
        <nav className={styles.navigation}>
            {
                menu.map(card =>  <Link key={card.id} to={card.url} className={styles.navigationLink}>{card.title}</Link>)
            }
        </nav>
        </div>
    )
}