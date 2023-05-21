
import { useState } from 'react'
import styles from './AddBasket.module.css'
import basket from '../../../../assets/images/basket.svg'


export const AddBasket = ({ cardPrice }) => {

    const [state, setState] = useState(1);

    const [price, setPrice] = useState(cardPrice)

    const [isShowState, setIsShowState] = useState(false)

    const stateAdd = () => {
        setState(state + 1)
        setPrice(price + cardPrice)
    }

    const stateDel = () => {
        if (state === 1) {
            setIsShowState(!isShowState)
        } else {
            setState(state - 1)
            setPrice(price - cardPrice)
        }
    }

    function click () {
        setIsShowState(!isShowState)
    }

    if (!isShowState) {
        return (
            <>
                <span className={styles.cardPrice}>{cardPrice} &#8381;</span>
                <button className={styles.cardButton} onClick={click}>
                    В корзину
                    <img src={basket} alt="basket"></img>
                </button>
            </>
        )
    }
    return (
        <>
            <div className={styles.number}>{state}</div>
            <button className={styles.delete} onClick={stateDel}>
                -
            </button>
            <span className={styles.addBasketPrice} >{cardPrice} &#8381;</span>
            <button className={styles.add} onClick={stateAdd}>
                +
            </button>
        </>
    )
}