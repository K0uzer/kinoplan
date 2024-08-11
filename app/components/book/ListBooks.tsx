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

    if (!isResultOfFetch) {
        return (
            <div className={styles.containerError}>
                <p>
                    Уважаемый пользователь, произошел сбой. Перезагрузите
                    страницу
                </p>
                <Button onClick={reloadPage} styles={styles.button}>
                    Перезагрузить страницу
                </Button>
            </div>
        )
    }

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
