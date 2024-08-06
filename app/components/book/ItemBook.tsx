import React from 'react'
import Image from 'next/image'

import plugForImage from '@public/plug.png'
import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './ItemBook.module.css'

interface ItemBookProps {
    book: Book
    view: 'table' | 'lines'
}

const ItemBook: React.FC<ItemBookProps> = ({ book, view }) => {
    const { cart, setCart } = useBook()

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))

    const filteredArrayCartOnUniqueBook = cart.filter(
        (element) => element.title === book.title,
    ).length

    const addBooksInCart = () => {
        setCart((prevState) => [
            ...prevState,
            { ...book, count: book.count + 1 },
        ])
        localStorage.setItem(
            'cart',
            JSON.stringify([...cartFromLocalStorage, book]),
        )
    }

    const deleteBooksFromCart = () => {
        setCart((prevState) =>
            prevState.filter((item) => item.title !== book.title),
        )
        localStorage.setItem(
            'cart',
            JSON.stringify(
                [...cartFromLocalStorage].filter(
                    (item) => item.title !== book.title,
                ),
            ),
        )
    }

    return (
        <li
            className={`${styles.listItem} ${
                view !== 'table' && styles.listItemForLine
            }`}
        >
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
