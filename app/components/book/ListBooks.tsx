'use client'
import React, { useEffect } from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'

import styles from './ListBooks.module.css'
import { getBooks } from '@app/api/getBooks'

const ListBooks = () => {
    const { books, setBooks, positionContent, setIsLoading } = useBook()

    useEffect(() => {
        setIsLoading(true)
        getBooks(setBooks)
        setIsLoading(false)
    }, [setBooks, setIsLoading])

    return (
        <ul
            className={
                positionContent === 'table'
                    ? styles.listTable
                    : styles.listLines
            }
        >
            {books.map((book) => (
                <ItemBook key={book.id} view={positionContent} book={book} />
            ))}
        </ul>
    )
}

export default ListBooks
