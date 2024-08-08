'use client'
import React from 'react'
import Link from 'next/link'
import { message } from 'antd'

import CartList from '@app/components/cart/СartList'
import { useBook } from '@hooks/useBook'

import styles from './page.module.css'
import { PATH } from '@app/constants'

const CartPage = () => {
    const { setCart } = useBook()

    const [messageApi, contextHolder] = message.useMessage()

    const getMessageAboutPurchase = () => {
        messageApi.open({
            type: 'success',
            content: 'Поздравляю с покупкой!',
        })

        setCart([])

        setTimeout(() => {
            window.location.href = PATH.main
        }, 3000)
    }

    return (
        <div className={styles.cartWrapper}>
            {contextHolder}
            <CartList />
            <div className={styles.buttonWrapper}>
                <Link href={PATH.main}>
                    <button className={styles.button}>Вернуться назад</button>
                </Link>
                <button
                    onClick={getMessageAboutPurchase}
                    className={styles.button}
                >
                    Оплатить
                </button>
            </div>
        </div>
    )
}

export default CartPage
