'use client'
import React from 'react'

import Loader from '@components/loader/Loader'
import ListBooks from '@components/book/ListBooks'
import { useBook } from '@hooks/useBook'
import Panels from '@components/book/Panels'

const HomePage = () => {
    const { isLoading } = useBook()

    return (
        <main>
            {isLoading && <Loader />}
            <Panels />
            <ListBooks />
        </main>
    )
}

export default HomePage
