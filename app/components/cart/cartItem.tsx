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
    console.log(cartFromLocalStorage)
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
        return changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, cart)
    }

    const decrementQuantity = () => {
        !quantityBooks
            ? setCart(() => decrementCount)
            : setCart((prevState) =>
                  prevState.filter((item) => item.title !== book.title),
              )
        changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, cart)
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
