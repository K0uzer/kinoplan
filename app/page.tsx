'use client'
import React, { useLayoutEffect } from 'react'

import Loader from '@components/loader/Loader'
import ListBooks from '@components/book/ListBooks'
import { useBook } from '@hooks/useBook'
import Panels from '@components/book/Panels'
import { getBooks } from './api/getBooks'
import DropDown from '@components/book/DropDown'
import PositioningPanel from './components/book/PositioningPanel'

const HomePage = () => {
    const { isLoading } = useBook()
    const { setBooks, setIsLoading } = useBook()

    useLayoutEffect(() => {
        getBooks(setBooks, setIsLoading)
    }, [setBooks, setIsLoading])

    return (
        <main>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Panels>
                        <DropDown />
                        <PositioningPanel />
                    </Panels>
                    <ListBooks />
                </>
            )}
        </main>
    )
}

export default HomePage
