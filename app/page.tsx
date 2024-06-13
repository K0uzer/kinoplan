'use client'


import getBooks from '@/API/getBooks'
import { Book } from '@/types'
import Image from 'next/image'

import { useEffect, useState } from 'react'

export default function Home() {
    const [books, setBook] = useState<Book[]>([])
    useEffect(() => {
        getBooks().then((result) => setBook(result.items))
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
