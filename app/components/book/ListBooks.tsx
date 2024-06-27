import React, { useContext, useMemo } from 'react'

import ItemBook from './ItemBook'
import { Book } from '@app/types'

import styles from './ListBooks.module.css'
import { useBook } from '@app/hooks/useBook'

const ListBooks = () => {
    const { books } = useBook()
    return useMemo(() => {
        return (
            <ul className={styles.list}>
                {books.map((book) => (
                    <ItemBook key={book.id} book={book} />
                ))}
            </ul>
        )
    }, [books])
}

export default ListBooks
