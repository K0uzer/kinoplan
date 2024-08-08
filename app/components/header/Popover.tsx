'use client'
import React from 'react'
import Link from 'next/link'
import { Popover } from 'antd'

import CartList from '@app/components/cart/СartList'
import { useBook } from '@app/hooks/useBook'

import styles from './Popover.module.css'
import { KINDS_KEYS_LOCAL_STORAGE, PATH } from '@app/constants'
import { useLocalStorage } from '@app/hooks/useLocalStorage'

const Content = () => {
    const { setCart } = useBook()
    const { changeLocalStorage } = useLocalStorage()

    const clearCart = () => {
        setCart([])
        changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, [])
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
function clearLocalStorageOfCart() {
    throw new Error('Function not implemented.')
}
