import React from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'

import styles from './ListBooks.module.css'

interface ListBooksProps {
    view: 'table' | 'lines'
}

const ListBooks: React.FC<ListBooksProps> = ({ view }) => {
    const { books } = useBook()
    return (
        <ul className={view === 'table' ? styles.listTable : styles.listLines}>
            {books.map((book) => (
                <ItemBook key={book.id} view={view} book={book} />
            ))}
        </ul>
    )
}

export default ListBooks
