import React from 'react'
import Image from 'next/image'

import plugForImage from '@public/plug.png'

const ItemBook = (book: any) => {
    return (
        <li>
            <Image
                src={book.image ?? plugForImage}
                alt={book.title}
                width={100}
                height={100}
            />
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.publishedDate}</span>
            <span>{book.category}</span>
        </li>
    )
}

export default ItemBook
