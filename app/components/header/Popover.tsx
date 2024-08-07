'use client'
import React from 'react'
import Link from 'next/link'
import { Popover } from 'antd'

import CartList from '@components/cart/CartList'
import { useBook } from '@app/hooks/useBook'

import styles from './Popover.module.css'
import { PATH } from '@app/constants'

const Content = () => {
    const { setCart } = useBook()

    const clearCart = () => {
        setCart([])
        clearLocalStorageOfCart()
    }

    return (
        <div className={styles.cart}>
            <CartList />
            <div className={styles.buttonCartContainer}>
                <Link href={PATH.cart}>
                    <button className={styles.buttonCart}>Купить</button>
                </Link>
                <button onClick={clearCart} className={styles.buttonCart}>
                    Отчистить
                </button>
            </div>
        </div>
    )
}

const Cart = () => {
    return (
        <Popover content={Content} title="Выбранные товары:">
            <button className={styles.buttonPopover}>Корзина</button>
        </Popover>
    )
}

export default Cart
