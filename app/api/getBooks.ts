import { URL_SERVER } from '@app/constants'
import { Book, BookFromServer } from '@app/types'
import { Dispatch, SetStateAction } from 'react'

export const getBooks = async (setBook: Dispatch<SetStateAction<Book[]>>) => {
    const dataFromServer = fetch(URL_SERVER).then((result) => result.json())
    const filteredData = await dataFromServer
        .then((result: { items: BookFromServer[] }) =>
            result.items.map((item: BookFromServer) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    author: item.volumeInfo.authors[0],
                    publishedDate: item.volumeInfo.publishedDate,
                    image: item.volumeInfo.imageLinks.smallThumbnail,
                    category: item.volumeInfo.categories[0],
                }
            }),
        )
        .then((result) => setBook(result))
        .catch((error: string) => {
            throw new Error(
                `Текущая ошибка связана с запросом к серверу ${error}`,
            )
        })
    return filteredData
}
