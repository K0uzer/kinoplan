import React, { useMemo } from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'

import styles from './ListBooks.module.css'

const ListBooks = () => {
    const { books } = useBook()
    return (
        <ul className={styles.list}>
            {books.map((book) => (
                <ItemBook key={book.id} book={book} />
            ))}
        </ul>
    )
}

export default ListBooks
