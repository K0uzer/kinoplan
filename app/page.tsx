'use client'
import React, { useEffect } from 'react'

import Loader from '@components/loader/Loader'
import ListBooks from '@components/book/ListBooks'
import { getBooks } from '@api/getBooks'
import { useBook } from '@hooks/useBook'
import Panels from '@components/book/Panels'
import FiltersPanel from './components/book/FiltersPanels'
import SortPanel from './components/book/SortPanel'
import PositioningPanel from './components/book/PositioningPanel'

const HomePage = () => {
    const {
        setBooks,
        isLoading,
        setIsLoading,
        positionContent,
        setPositionContent,
    } = useBook()

    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true)
            await getBooks(setBooks)
            setIsLoading(false)
        }
        fetchBooks()
    }, [setBooks, setIsLoading])

    return (
        <main>
            {isLoading && <Loader />}
            <Panels>
                <SortPanel />
                <FiltersPanel />
                <PositioningPanel
                    changePositionOfContent={setPositionContent}
                />
            </Panels>
            <ListBooks position={positionContent} />
        </main>
    )
}

export default HomePage
