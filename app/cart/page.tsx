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
        </div>
    )
}

export default CartPage
