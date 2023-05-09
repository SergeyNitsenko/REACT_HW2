import { useParams } from "react-router-dom";
import styles from './Card.module.css'
import lamb from '../../assets/images/lamb.png'
import { menu } from "../../data/menu";


export const Card = () => {

    const { url } = useParams();

    const { title } = menu.find(card => card.url === url)

    return (
        <div className={styles.card}>
            <img src={lamb} alt='lamb'></img>
            <h2 className={styles.cardTitle}>{title}</h2>
        </div>
    )

}