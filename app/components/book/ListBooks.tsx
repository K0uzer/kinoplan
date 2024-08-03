import React from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'

import styles from './ListBooks.module.css'

interface ListBooksProps {
    position: 'table' | 'lines'
}

const ListBooks: React.FC<ListBooksProps> = ({ position }) => {
    const { books } = useBook()
    return (
        <ul
            className={
                position === 'table' ? styles.listTable : styles.listLines
            }
        >
            {books.map((book) => (
                <ItemBook key={book.id} position={position} book={book} />
            ))}
        </ul>
    )
}

export default ListBooks
