'use client'
import React from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'
import { useLocalStorage } from '@app/hooks/useLocalStorage'
import { KINDS_KEYS_LOCAL_STORAGE } from '@app/constants'
import Button from '@app/UI/Button'

import styles from './ListBooks.module.css'

const ListBooks = () => {
    const { books, positionContent } = useBook()
    const { getLocalStorage } = useLocalStorage()

    const isResultOfFetch = getLocalStorage(
        KINDS_KEYS_LOCAL_STORAGE.RESULT_FETCH,
    )

    const reloadPage = () => window.location.reload()
    return (
        <>
            {isResultOfFetch ? (
                <ul
                    className={
                        positionContent === 'table'
                            ? styles.listTable
                            : styles.listLines
                    }
                >
                    {books.map((book) => (
                        <ItemBook
                            key={book.id}
                            view={positionContent}
                            book={book}
                        />
                    ))}
                </ul>
            ) : (
                <Button onClick={reloadPage} styles={styles.button}>
                    Перезагрузить страницу
                </Button>
            )}
        </>
    )
}

export default ListBooks
