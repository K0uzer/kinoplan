import React, { useState } from 'react'

import { Book } from '@app/types'

import styles from './CartItem.module.css'
import { useBook } from '@app/hooks/useBook'

const CartItem = ({ book }: { book: Book }) => {
    const { cart, setCart } = useBook()
    const [quantity, setQuantity] = useState(book.quantity)

    console.log(book)
    // console.log(cart)

    const incrementQuantity = () => {
        setQuantity((prevState) => prevState + 1)
    }

    const decrementQuantity = () => {
        setQuantity((prevState) => prevState - 1)
    }

    return (
        <li className={styles.cartItem}>
            <p className={styles.itemContent}>{book.title}</p>
            <p className={styles.itemContent}>от {book.author}</p>
            <p className={styles.quantity}>Количество: {quantity}</p>
            <button className={styles.button} onClick={incrementQuantity}>
                Добавить
            </button>
            {!!quantity && (
                <button className={styles.button} onClick={decrementQuantity}>
                    Убрать
                </button>
            )}
        </li>
    )
}

export default CartItem
