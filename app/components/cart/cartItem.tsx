import React, { useState } from 'react'

import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './CartItem.module.css'

const CartItem = ({ book }: { book: Book }) => {
    const { cart, setCart } = useBook()

    const quantityBooks = cart.map(
        (element) => element.title === book.title && element.count,
    )

    const incrementCount = cart.map((element) =>
        element.title === book.title
            ? { ...element, count: element.count + 1 }
            : element,
    )

    const decrementCount = cart.map((element) =>
        element.title === book.title
            ? { ...element, count: element.count - 1 }
            : element,
    )

    console.log('РЕНДЕР')

    const incrementQuantity = () => setCart(() => incrementCount)

    const decrementQuantity = () =>
        !quantityBooks
            ? setCart(() => decrementCount)
            : setCart((prevState) =>
                  prevState.filter((item) => item.title !== book.title),
              )

    return (
        <li className={styles.cartItem}>
            <p className={styles.itemContent}>{book.title}</p>
            <p className={styles.itemContent}>от {book.author}</p>
            <p className={styles.quantity}>Количество: {quantityBooks}</p>
            <button className={styles.button} onClick={incrementQuantity}>
                Добавить
            </button>
            <button className={styles.button} onClick={decrementQuantity}>
                Убрать
            </button>
        </li>
    )
}

export default CartItem
