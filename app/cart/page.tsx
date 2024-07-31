'use client'

import React from 'react'

import CartList from '@app/components/cart/CartList'
import ResultPurchase from './../components/resultPurchase/ResultPurchase'
import { useBook } from '@app/hooks/useBook'
import Result from '@app/components/result/Result'

import styles from './cart.module.css'

const CartPage = () => {
    const { bought, setBought, cart, setCart } = useBook()

    const makePurchase = () => {
        setCart([])
        setBought((prevState) => !prevState)
    }

    return (
        <div className={styles.cartWrapper}>
<<<<<<< HEAD
            <CartList />
            <div className={styles.buttonWrapper}>
                <Link href="/">
                    <button className={styles.button}>Вернуться назад</button>
                </Link>
                <Link href="/">
                    <button
                        onClick={payForThePurchase}
                        className={styles.button}
                    >
                        Оплатить
                    </button>
                </Link>
            </div>
=======
            {bought ? (
                <ResultPurchase />
            ) : (
                <>
                    {cart.length ? (
                        <>
                            <CartList />
                            <button
                                className={styles.button}
                                onClick={makePurchase}
                            >
                                Оплатить
                            </button>
                        </>
                    ) : (
                        <Result />
                    )}
                </>
            )}
>>>>>>> 22b3524b8f27bffa2cd587fa76b359583492b7d9
        </div>
    )
}

export default CartPage
