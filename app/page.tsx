'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { URL_SERVER } from './constants'
import { Book, BookFromServer } from 'types/index'
import plugForImage from '@public/plug.png'
import Loader from './components/Loader'

const Home = () => {
    const [books, setBook] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // SetIsLoading(true)
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
        setIsLoading(false)
    }, [])
    console.log(books)
    return (
        <main>
            {isLoading && <Loader />}
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                        <span>{book.publishedDate}</span>
                        <span>{book.category}</span>
                        <Image
                            src={book.image ?? plugForImage}
                            alt={book.title}
                            width={100}
                            height={100}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home