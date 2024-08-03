'use client'

import { useEffect, useState } from 'react'

import Loader from '@components/loader/Loader'
import ListBooks from '@components/book/ListBooks'
import { getBooks } from '@api/getBooks'
import { useBook } from '@hooks/useBook'
import Panels from '@components/book/Panels'
import FiltersPanel from './components/book/FiltersPanels'
import SortPanel from './components/book/SortPanel'
import PositioningPanel from './components/book/PositioningPanel'

const initialPosition = 'table'

const HomePage = () => {
    const { setBooks, isLoading, setIsLoading } = useBook()

    const [positionContent, setPositionContent] = useState(initialPosition)

    useEffect(() => {
        setIsLoading(true)
        getBooks(setBooks)
        setIsLoading(false)
    }, [setBooks, setIsLoading])

    return (
        <main>
            {isLoading && <Loader />}
            <Panels>
                <FiltersPanel />
                <SortPanel />
                <PositioningPanel changePositionOfContent={setPositionContent} />
            </Panels>
            <ListBooks position={positionContent} />
        </main>
    )
}

export default HomePage
