'use client'
import React from 'react'
import { Popover } from 'antd'
import Link from 'next/link'

import CartList from '@app/components/cart/СartList'
import { useBook } from '@app/hooks/useBook'
import { KINDS_KEYS_LOCAL_STORAGE, PATH } from '@app/constants'
import { useLocalStorage } from '@app/hooks/useLocalStorage'

import styles from './Popover.module.css'

const Content = () => {
    const { cart, setCart } = useBook()
    const { changeLocalStorage } = useLocalStorage()

    const clearCart = () => {
        setCart([])
        changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, [])
    }

    return (
        <div className={styles.cart}>
            <CartList />
            {!!cart.length && (
                <div className={styles.buttonCartContainer}>
                    <Link href={PATH.CART}>
                        <button className={styles.buttonCart}>Купить</button>
                    </Link>
                    <button onClick={clearCart} className={styles.buttonCart}>
                        Отчистить
                    </button>
                </div>
            )}
        </div>
    )
}

const Cart = () => {
    const { cart } = useBook()

    const quantityBooksInCart = cart.reduce((curr, exp) => curr + exp.count, 0)

    return (
        <>
            <Popover
                className={styles.popover}
                content={Content}
                title="Выбранные товары:"
            >
                <button className={styles.buttonPopover}>Корзина</button>
                {!!cart.length && (
                    <span className={styles.countButton}>
                        {quantityBooksInCart}
                    </span>
                )}
            </Popover>
        </>
    )
}

export default Cart
