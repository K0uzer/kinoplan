'use client'

import { useEffect } from 'react'

import Loader from '@components/loader/Loader'
import ListBooks from '@components/book/ListBooks'
import { getBooks } from '@api/getBooks'
import { useBook } from '@hooks/useBook'

const HomePage = () => {
    const { setBook, isLoading, setIsLoading } = useBook()

    useEffect(() => {
        setIsLoading(true)
        getBooks().then((content) => setBook(content))
        setIsLoading(false)
    }, [setBook, setIsLoading])

    return <main>{isLoading ? <Loader /> : <ListBooks />}</main>
}

export default HomePage
