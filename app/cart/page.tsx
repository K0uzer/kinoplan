'use client'

import CartList from '@app/components/cart/CartList'
import Link from 'next/link'
import React from 'react'

import styles from './cart.module.css'
import { useBook } from '@hooks/useBook'

const CartPage = () => {
    const { cart, setCart } = useBook()

    const payForThePurchase = () => {
        setCart([])
        alert('Оплачено')
    }

    return (
        <div className={styles.cartWrapper}>
            <CartList />
            <div className={styles.buttonWrapper}>
                <Link href="/">
                    <button className={styles.button}>Вернуться назад</button>
                </Link>
                <Link href="/">
                    <button
                        disabled={cart.length > 0 ? false : true}
                        onClick={payForThePurchase}
                        className={styles.button}
                    >
                        Оплатить
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CartPage
