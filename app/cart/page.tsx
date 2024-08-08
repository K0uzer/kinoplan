'use client'
import React from 'react'
import Link from 'next/link'
import { message } from 'antd'

import CartList from '@app/components/cart/СartList'
import { useBook } from '@hooks/useBook'
import { KINDS_KEYS_LOCAL_STORAGE, PATH } from '@app/constants'
import { useLocalStorage } from '@app/hooks/useLocalStorage'

import styles from './page.module.css'

const CartPage = () => {
    const { setCart } = useBook()

    const [messageApi, contextHolder] = message.useMessage()
    const { changeLocalStorage } = useLocalStorage()

    const getMessageAboutPurchase = () => {
        messageApi.open({
            type: 'success',
            content: 'Поздравляю с покупкой!',
        })

        setCart([])

        changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, [])

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
