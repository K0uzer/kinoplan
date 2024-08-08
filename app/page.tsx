'use client'
import React, { useEffect } from 'react'

import Loader from '@components/loader/Loader'
import ListBooks from '@components/book/ListBooks'
import { getBooks } from '@api/getBooks'
import { useBook } from '@hooks/useBook'
import Panels from '@components/book/Panels'

const HomePage = () => {
    const { setBooks, isLoading, setIsLoading, positionContent } = useBook()

    useEffect(() => {
        setIsLoading(true)
        getBooks(setBooks)
        setIsLoading(false)
    }, [setBooks, setIsLoading])

    return (
        <main>
            {isLoading && <Loader />}
            <Panels />
            <ListBooks view={positionContent} />
        </main>
    )
}

export default HomePage
