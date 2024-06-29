'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'
import { Popover } from 'antd'

import CartList from '../cart/CartList'
import { useBook } from '@app/hooks/useBook'

import styles from './Cart.module.css'

const Content = () => {
    const { cart, setCart } = useBook()

    const clearCart = useCallback(() => {
        setCart([])
    }, [setCart])

    return (
        <div className={styles.cart}>
            <div className={styles.buttonCartContainer}>
                {cart.length ? (
                    <>
                        <CartList />
                        <Link href="/cart">
                            <button className={styles.buttonCart}>
                                Купить
                            </button>
                        </Link>
                        <button
                            onClick={clearCart}
                            className={styles.buttonCart}
                        >
                            Отчистить
                        </button>
                    </>
                ) : (
                    <Link href="/cart">
                        <p>Перейти в корзину</p>
                    </Link>
                )}
            </div>
        </div>
    )
}

const Cart = () => {
    const { cart } = useBook()

    return (
        <Popover content={Content} title={!!cart.length && 'Добавить элемент'}>
            <button className={styles.buttonPopover}>Корзина</button>
        </Popover>
    )
}

export default Cart
