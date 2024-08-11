'use client'
import React, { useEffect } from 'react'

import Loader from '@components/loader/Loader'
import ListBooks from '@components/book/ListBooks'
import { useBook } from '@hooks/useBook'
import Panels from '@components/book/Panels'
import { getBooks } from './api/getBooks'

const HomePage = () => {
    const { isLoading } = useBook()
    const { setBooks, setIsLoading } = useBook()

    useEffect(() => {
        getBooks(setBooks, setIsLoading)
    }, [setBooks, setIsLoading])

    return (
        <main>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Panels />
                    <ListBooks />
                </>
            )}
        </main>
    )
}

export default HomePage
