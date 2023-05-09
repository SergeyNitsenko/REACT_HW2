import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
import { menu } from '../../data/menu'

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            {
                menu.map(card =>  <Link key={card.id} to={card.url} className={styles.navigationLink}>{card.title}</Link>)
            }
        </nav>
    )
}