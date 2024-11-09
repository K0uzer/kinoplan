import React from 'react'
import Image from 'next/image'

import plugForImage from '@public/plug.png'
import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'
import { useLocalStorage } from '@app/hooks/useLocalStorage'
import { KINDS_KEYS_LOCAL_STORAGE } from '@app/constants'

import styles from './ItemBook.module.css'

interface ItemBookProps {
  book: Book
  view: 'table' | 'lines'
}

const ItemBook: React.FC<ItemBookProps> = ({ book, view }) => {
  const { cart, setCart } = useBook()
  const { changeLocalStorage } = useLocalStorage()

  const lengthCart = cart.filter(
    (element) => element.title === book.title,
  ).length

  const addBooks = () => {
    setCart((prevState) => {
      const newState = [...prevState, { ...book, count: book.count + 1 }]
      changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, newState)
      return newState
    })
  }

  const deleteBooks = () => {
    setCart((prevState) => {
      const newState = prevState.filter((item) => item.title !== book.title)
      changeLocalStorage(KINDS_KEYS_LOCAL_STORAGE.CART, newState)
      return newState
    })
  }

  return (
    <li
      className={`${styles.listItem} ${
        view !== 'table' && styles.listItemForLine
      }`}
    >
      <span className={styles.titleBook} title={book?.title}>
        {book?.title}
      </span>
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

      {!lengthCart ? (
        <button onClick={addBooks} className={styles.buttonAdd}>
          Добавить в корзину
        </button>
      ) : (
        <button onClick={deleteBooks} className={styles.buttonAdd}>
          Убрать из корзины
        </button>
      )}
    </li>
  )
}

export default ItemBook
