'use client'
import React, { useEffect, useState } from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'
import { useLocalStorage } from '@app/hooks/useLocalStorage'
import { KINDS_KEYS_LOCAL_STORAGE } from '@app/constants'
import Button from '@app/UI/Button'
import { reloadPage } from '@app/utils'

import styles from './ListBooks.module.css'

const ListBooks = () => {
    const { books, positionContent } = useBook()
    const [isLoading, setIsLoading] = useState(true)
    const [hasFetchResult, setHasFetchResult] = useState(false)
    const { getLocalStorage } = useLocalStorage()

    useEffect(() => {
        const checkLocalStorage = async () => {
            const result = await getLocalStorage(
                KINDS_KEYS_LOCAL_STORAGE.RESULT_FETCH,
            )
            setHasFetchResult(result !== null)
            setIsLoading(false)
        }
        checkLocalStorage()
    }, [getLocalStorage])

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    if (!hasFetchResult) {
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
