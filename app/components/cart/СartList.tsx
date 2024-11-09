'use client'
import React, { useEffect } from 'react'

import { useBook } from '@app/hooks/useBook'
import CartItem from './СartItem'
import { useLocalStorage } from '@app/hooks/useLocalStorage'
import { KINDS_KEYS_LOCAL_STORAGE } from '@app/constants'

import styles from './CartList.module.css'

const CartList = () => {
  const { cart, setCart } = useBook()
  const { getLocalStorage } = useLocalStorage()

  useEffect(() => {
    const cartFromLocalStorage = getLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART)
    if (
      cartFromLocalStorage &&
      cartFromLocalStorage.length &&
      cart.length === 0
    ) {
      setCart(cartFromLocalStorage)
    }
  }, [cart.length, getLocalStorage, setCart])

  return (
    <>
      {!cart.length ? (
        <p>Корзина пуста :c</p>
      ) : (
        <>
          <p>Ваши покупки:</p>
          <ul className={styles.cartList}>
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
