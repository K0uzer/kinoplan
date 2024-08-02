import { Dispatch, SetStateAction } from 'react'

import { URL_SERVER } from '@app/constants/index'
import { Book, BookFromServer } from '@app/types'

export const getBooks = (setBooks: Dispatch<SetStateAction<Book[]>>) => {
    const dataFromServer = fetch(URL_SERVER).then((result) => result.json())

    const content = dataFromServer
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
            setBooks(books)
            localStorage.setItem('books', JSON.stringify(books))
        })
        .catch((error: string) => {
            console.error(error)
        })
    return content
}
