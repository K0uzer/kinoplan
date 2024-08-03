'use client'
import React from 'react'
import Link from 'next/link'
import { message } from 'antd'

import CartList from '@app/components/cart/CartList'
import { useBook } from '@hooks/useBook'

import styles from './page.module.css'

const CartPage = () => {
    const { setCart } = useBook()

    const [messageApi, contextHolder] = message.useMessage()

    const changePath = () => (window.location.href = '/')

    const success = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        messageApi.open({
            type: 'success',
            content: 'Поздравляю с покупкой!',
        })

        setCart([])

        setTimeout(() => {
            changePath()
        }, 3000)
    }

    return (
        <div className={styles.cartWrapper}>
            <CartList />
            <div className={styles.buttonWrapper}>
                {contextHolder}
                <Link href="/">
                    <button className={styles.button}>Вернуться назад</button>
                </Link>
                <button onClick={success} className={styles.button}>
                    Оплатить
                </button>
            </div>
        </div>
    )
}

export default CartPage
