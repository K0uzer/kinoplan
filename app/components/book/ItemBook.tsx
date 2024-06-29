import React, { useCallback, useState } from 'react'
import Image from 'next/image'

import plugForImage from '@public/plug.png'
import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './ItemBook.module.css'

const ItemBook = ({ book }: { book: Book }) => {
    const { setCart } = useBook()
    const [locatedInCart, setLocatedInCart] = useState(false)

    const addBooksInCart = useCallback(() => {
        setCart((prevState) => [...prevState, book])
        setLocatedInCart((prevState) => !prevState)
    }, [book, setCart])

    const deleteBooksFromCart = useCallback(() => {
        setCart((prevState) =>
            prevState.filter((item) => item.title !== book.title),
        )
        setLocatedInCart((prevState) => !prevState)
    }, [book, setCart])

    return (
        <li className={styles.listItem}>
            <span className={styles.titleBook}>{book.title}</span>
            <Image
                className={styles.imageBook}
                src={book.image ?? plugForImage}
                alt={book.title}
                width={150}
                height={200}
            />
            <span className={styles.authorBook}>Автор:{book.author}</span>
            <span className={styles.publishedDate}>
                Дата публикации:{book?.publishedDate}
            </span>
            <span className={styles.category}>Категория:{book.category}</span>

            {!locatedInCart ? (
                <button onClick={addBooksInCart} className={styles.buttonAdd}>
                    Добавить в корзину
                </button>
            ) : (
                <button
                    onClick={deleteBooksFromCart}
                    className={styles.buttonAdd}
                >
                    Убрать из корзины
                </button>
            )}
        </li>
    )
}

export default ItemBook
