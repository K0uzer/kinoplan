'use client'
import React, { useCallback, useMemo } from 'react'
import Link from 'next/link'
import { Popover } from 'antd'

import CartList from '../cart/CartList'
import { useBook } from '@app/hooks/useBook'

import styles from './Popover.module.css'

const Content = () => {
    const { cart, setCart } = useBook()

    const clearCart = useCallback(() => {
        setCart([])
    }, [setCart])

        return (
            <div className={styles.cart}>
                <CartList />
                <div className={styles.buttonCartContainer}>
                    <Link href="/cart">
                        <button
                            disabled={cart.length > 0 ? false : true}
                            className={styles.buttonCart}
                        >
                            Купить
                        </button>
                    </Link>
                    <button
                        disabled={cart.length > 0 ? false : true}
                        onClick={clearCart}
                        className={styles.buttonCart}
                    >
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
