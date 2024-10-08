'use client'
import React, { useEffect } from 'react'

import { useBook } from '@app/hooks/useBook'
import CartItem from './СartItem'
import { useLocalStorage } from '@app/hooks/useLocalStorage'
import { KINDS_KEYS_LOCAL_STORAGE } from '@app/constants'

const CartList = () => {
    const { cart, setCart } = useBook()
    const { getLocalStorage } = useLocalStorage()

    const cartFromLocalStorage = getLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART)

    useEffect(() => {
        if (cartFromLocalStorage?.length) {
            setCart(cartFromLocalStorage)
        }
    }, [])

    return (
        <>
            {!cart.length ? (
                <p>Корзина пуста :c</p>
            ) : (
                <>
                    <p>Ваши покупки:</p>
                    <ul>
                        {cart.map((book) => (
                            <CartItem key={book.id} book={book} />
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}

export default CartList
