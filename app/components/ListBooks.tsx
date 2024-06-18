import React from 'react'

import ItemBook from './ItemBook'
import { Book } from '@types/index'

import styles from './ListBooks.module.css'

const ListBooks = (array: Book[]) => {
    return (
        <ul className={styles.list}>
            {array.map((book) => (
                <ItemBook key={book.id} book={book} />
            ))}
        </ul>
    )
}

export default ListBooks
