import { URL_SERVER } from '@app/constants'
import { BookFromServer } from '@app/types'

export const getBooks = async () => {
    const dataFromServer = fetch(URL_SERVER).then((result) => result.json())
    const filteredData = await dataFromServer
        .then((result: { items: BookFromServer[] }) =>
            result.items.map((item: BookFromServer) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    author: item.volumeInfo?.authors[0],
                    publishedDate: item.volumeInfo.publishedDate,
                    image: item.volumeInfo.imageLinks.smallThumbnail,
                    category: item.volumeInfo?.categories[0],
                }
            }),
        )
        .catch((error: string) => {
            console.error(error)
        })
    return filteredData
}
