import { useParams } from "react-router-dom";
import styles from './Card.module.css'
import lamb from '../../assets/images/lamb.png'
import { menu } from "../../data/menu";


export const Card = () => {

    const { url } = useParams();

    const { title } = menu.find(card => {
        if (url === undefined) {
            return card.url === 'cold_appetizers'
        } return card.url === url
    })

    return (
        <>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>{title}</h2>
            </div>
            <div>
                <img src={lamb} alt='lamb'></img>
            </div>
        </>
    )

}