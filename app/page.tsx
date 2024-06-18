'use client'

import { useEffect, useState } from 'react'

import { URL_SERVER } from './constants'
import { Book, BookFromServer } from 'types/index'
import Loader from './components/Loader'
import ListBooks from './components/ListBooks'

const Home = () => {
    const [books, setBook] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading((is) => !is)
        fetch(URL_SERVER)
            .then((result) => result.json())
            .then((result) =>
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
            .then((result) => setBook(result))
        setIsLoading((is) => !is)
    }, [])
    return (
        <main>
            {isLoading && <Loader />}
            <ListBooks array={books} />
        </main>
    )
}

export default Home