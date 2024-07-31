import React, { useMemo } from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'

import styles from './ListBooks.module.css'

const ListBooks = () => {
    const { books } = useBook()
<<<<<<< HEAD
=======

>>>>>>> 22b3524b8f27bffa2cd587fa76b359583492b7d9
    return (
        <ul className={styles.list}>
            {books.map((book) => (
                <ItemBook key={book.id} book={book} />
            ))}
        </ul>
    )
}

export default ListBooks
