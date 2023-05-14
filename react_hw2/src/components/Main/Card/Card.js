import { Link, useParams } from "react-router-dom";
import styles from './Card.module.css'
import { menu } from "../../../data/menu.js";
import basket from '../../../assets/images/basket.svg'
import { useState } from "react";
import { AddBasket } from "./AddBasket/AddBasket";


export const Card = () => {

    const { url } = useParams();

    const { title, products } = menu.find(card => {
        if (url === undefined) {
            return card.url === 'cold_appetizers'
        } return card.url === url
    })

    const [state, setState] = useState(0)



    return (
        <>
            <div className={styles.cardCategory}>
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <div className={styles.containerCard}>
                {
                    products.map(card =>
                        <div key={card.id} className={styles.cardImg}>
                            <div className={styles.number}>{state}</div>
                            <img className={styles.img} src={card.image.src} alt={card.image.alt}></img>
                            <div className={styles.cardContent}>
                                <div className={styles.titleWeight}>
                                    <h4 className={styles.titleCard}>{card.title}</h4>
                                    <span className={styles.cardWeight}>{card.weight}</span>
                                </div>
                                <span className={styles.cardText}>{card.description}</span>
                                <div className={styles.priceBasket}>
                                    <span className={styles.cardPrice}>{card.price}	&#8381;</span>
                                    <Link to='/AddBasket' className={styles.cardButton}>В корзину<img src={basket} alt="basket"></img></Link>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </>
    )

}