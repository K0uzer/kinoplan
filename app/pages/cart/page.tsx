'use client'
import React from 'react'
import { message } from 'antd'

import CartList from '@app/components/cart/СartList'
import { useBook } from '@hooks/useBook'
import { KINDS_KEYS_LOCAL_STORAGE, PATH } from '@app/constants'
import { useLocalStorage } from '@app/hooks/useLocalStorage'

import styles from './page.module.css'

const CartPage = () => {
    const { cart, setCart } = useBook()

    const [messageApi, contextHolder] = message.useMessage()
    const { changeLocalStorage } = useLocalStorage()

    const changePage = (path: string) => (window.location.href = path)

    const getMessageAboutPurchase = () => {
        messageApi.open({
            type: 'success',
            content: 'Поздравляю с покупкой!',
        })

        setCart([])

        changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, [])

        setTimeout(() => {
            window.location.href = PATH.MAIN
        }, 3000)
    }

    return (
        <div className={styles.cartWrapper}>
            {contextHolder}
            <CartList />
            {!!cart.length && (
                <div className={styles.buttonWrapper}>
                    <button
                        onClick={() => changePage(PATH.MAIN)}
                        className={styles.button}
                    >
                        Вернуться на главную
                    </button>
                    <button
                        onClick={getMessageAboutPurchase}
                        className={styles.button}
                    >
                        Оплатить
                    </button>
                </div>
            )}
        </div>
    )
}

export default CartPage
