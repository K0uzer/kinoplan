'use client'
import React, { useLayoutEffect, useState } from 'react'

import ItemBook from './ItemBook'
import { useBook } from '@app/hooks/useBook'
import { useLocalStorage } from '@app/hooks/useLocalStorage'
import { KINDS_KEYS_LOCAL_STORAGE } from '@app/constants'
import Button from '@app/UI/Button'
import { reloadPage } from '@app/utils'

import styles from './ListBooks.module.css'

const ListBooks = () => {
    const { books, positionContent, isLoading, setIsLoading } = useBook()
    const [hasFetchResult, setHasFetchResult] = useState(false)
    const { getLocalStorage } = useLocalStorage()

    useLayoutEffect(() => {
        setIsLoading(true)
        const checkLocalStorage = async () => {
            const result = await getLocalStorage(
                KINDS_KEYS_LOCAL_STORAGE.RESULT_FETCH,
            )
            setHasFetchResult(result !== null)
        }
        checkLocalStorage()
        setIsLoading(false)
    }, [getLocalStorage, setIsLoading])

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
