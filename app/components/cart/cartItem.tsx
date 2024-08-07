import React from 'react'

import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './CartItem.module.css'
import { KINDS_KEYS_LOCAL_STORAGE } from '@app/constants'
import { useLocalStorage } from '@app/hooks/useLocalStorage'

const CartItem = ({ book }: { book: Book }) => {
    const { cart, setCart } = useBook()
    const { changeLocalStorage, getLocalStorage } = useLocalStorage()

    const cartFromLocalStorage: Book[] = getLocalStorage(
        KINDS_KEYS_LOCAL_STORAGE.CART,
    )

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

    const incrementQuantity = () => {
        setCart(() => incrementCount)
        changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, [
            ...cartFromLocalStorage,
            { ...book, count: book.count + 1 },
        ])
    }

    const decrementQuantity = () => {
        changeLocalStorage(
            KINDS_KEYS_LOCAL_STORAGE.CART,
            cartFromLocalStorage.filter((item) => item.title !== book.title),
        )
        return !quantityBooks
            ? setCart(() => decrementCount)
            : setCart((prevState) =>
                  prevState.filter((item) => item.title !== book.title),
              )
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
