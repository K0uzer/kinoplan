'use client'

import { Book } from '@/types'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { URL_SERVER } from './constants'

const Home = () => {
    const [books, setBook] = useState<Book[]>([])
    useEffect(() => {
        fetch(URL_SERVER)
            .then((result) => result.json())
            .then((result) => setBook(result.items))
    }, [])
    return (
        <main>
            <ul>
                {books.map((book: Book) => (
                    <li key={book.id}>
                        <span>{book.volumeInfo.title}</span>
                        <span>{book.volumeInfo.author}</span>
                        <span>{book.volumeInfo.publishedDate}</span>
                        <Image
                            src={book.imageLink.smallThumbnail}
                            alt={book.volumeInfo.title}
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