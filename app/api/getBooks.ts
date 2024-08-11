import React, { Dispatch, SetStateAction } from 'react'

import { KINDS_KEYS_LOCAL_STORAGE, URL_SERVER } from '@app/constants/index'
import { Book, BookFromServer } from '@app/types'

export const getBooks = (
    setBooks: Dispatch<SetStateAction<Book[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    const dataFromServer = fetch(URL_SERVER)
        .then((result) => {
            setIsLoading(true)
            localStorage.setItem(
                KINDS_KEYS_LOCAL_STORAGE.RESULT_FETCH,
                JSON.stringify(result.ok),
            )

            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`)
            }

            return result.json()
        })
        .then((result: { items: BookFromServer[] }) => {
            const books = result?.items.map((item: BookFromServer) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    author: item.volumeInfo?.authors?.[0] ?? 'Unknown Author',
                    publishedDate: item.volumeInfo.publishedDate,
                    image: item.volumeInfo.imageLinks?.smallThumbnail ?? '',
                    category:
                        item.volumeInfo?.categories?.[0] ?? 'Uncategorized',
                    count: 0,
                }
            })

            return books
        })
        .then((result) => {
            setBooks(result)

            if (result) {
                localStorage.setItem(
                    KINDS_KEYS_LOCAL_STORAGE.BOOKS,
                    JSON.stringify([...result]),
                )
            } else {
                localStorage.setItem(
                    KINDS_KEYS_LOCAL_STORAGE.BOOKS,
                    JSON.stringify([]),
                )
            }
            setIsLoading(false)
        })
        .catch((error: Error) => {
            return { error: error.message }
        })
    return dataFromServer
}
