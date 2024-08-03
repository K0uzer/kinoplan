'use client'
import React from 'react'
import Link from 'next/link'

import CartList from '@app/components/cart/CartList'
import { useBook } from '@hooks/useBook'

import styles from './cart.module.css'

const CartPage = () => {
    const { setCart } = useBook()

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
