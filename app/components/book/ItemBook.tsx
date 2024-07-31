import React, { useCallback, useState } from 'react'
import Image from 'next/image'

import plugForImage from '@public/plug.png'
import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './ItemBook.module.css'

const ItemBook = ({ book }: { book: Book }) => {
    const { cart, setCart } = useBook()

    const filteredArrayCartOnUniqueBook = cart.filter(
        (element) => element.title === book.title,
    ).length

    const addBooksInCart = () => {
        setCart((prevState) => [
            ...prevState,
            { ...book, count: book.count + 1 },
        ])
    }

    const deleteBooksFromCart = () => {
        setCart((prevState) =>
            prevState.filter((item) => item.title !== book.title),
        )
    }

    return (
        <li className={styles.listItem}>
            <span className={styles.titleBook}>{book?.title}</span>
            <Image
                className={styles.imageBook}
                src={book.image ?? plugForImage}
                alt={book.title}
                width={150}
                height={200}
            />
            <span className={styles.authorBook}>Автор:{book?.author}</span>
            <span className={styles.publishedDate}>
                Дата публикации:{book?.publishedDate}
            </span>
            <span className={styles.category}>Категория:{book?.category}</span>

            {!filteredArrayCartOnUniqueBook ? (
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
