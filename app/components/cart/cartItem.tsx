import React, { useState } from 'react'

import { Book } from '@app/types'

import styles from './CartItem.module.css'

const CartItem = ({ book }: { book: Book }) => {
    const [quantityBooks, setQuantityBooks] = useState(1)

    const incrementQuantity = () => {
        setQuantityBooks((prevState) => prevState + 1)
    }

    const decrementQuantity = () => {
        setQuantityBooks((prevState) => prevState - 1)
    }

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
