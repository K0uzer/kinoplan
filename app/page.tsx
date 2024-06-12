'use client'

import getBooks from '@/API/getBooks'
import { Book } from '@/types/booksTypes'
import Image from 'next/image'

import { useEffect, useState } from 'react'

export default function Home() {
    const [books, setBook] = useState<Book[]>([])
    useEffect(() => {
        const fetch = async () => {
            const booksData: Book[] = await getBooks()
            setBook(booksData)
        }
        fetch()
    }, [])
    return (
        <main className="">
            <ul>
                {books.map((book: Book) => (
                    <li key={book.title}>
                        <span>{book.title}</span>
                        <span>{book.authors}</span>
                        <span>{book.publishedDate}</span>
                        <Image
                            src={book.image}
                            alt={book.title}
                            width={100}
                            height={100}
                        />
                        {/* <span>{book.language}</span> */}
                        {/* <span>{book.price}</span> */}
                        {/* <span>{book.currency}</span> */}
                        {/* <span>{book.categories}</span> */}
                    </li>
                ))}
            </ul>
        </main>
    )
}
