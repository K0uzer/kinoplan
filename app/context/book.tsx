'use client'

import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from 'react'

import { Book } from '@app/types'
import { INITIAL_POSITION } from '@app/constants'

export type ContextBookType = {
    books: Book[]
    setBooks: Dispatch<SetStateAction<Book[]>>
    cart: Book[]
    setCart: Dispatch<SetStateAction<Book[]>>
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
    positionContent: 'table' | 'lines'
    setPositionContent: Dispatch<SetStateAction<'table' | 'lines'>>
    isAuthorized: boolean
    setIsAuthorized: Dispatch<SetStateAction<boolean>>
}

export const BookContext = createContext<ContextBookType>({
    books: [],
    setBooks: () => {},
    cart: [],
    setCart: () => {},
    isLoading: false,
    setIsLoading: () => {},
    positionContent: 'table',
    setPositionContent: () => {},
    isAuthorized: false,
    setIsAuthorized: () => {},
})

const BookContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([])
    const [cart, setCart] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [positionContent, setPositionContent] = useState(INITIAL_POSITION)
    const [isAuthorized, setIsAuthorized] = useState(false)
    const value: ContextBookType = useMemo(
        () => ({
            books,
            setBooks,
            cart,
            setCart,
            isLoading,
            setIsLoading,
            positionContent,
            setPositionContent,
            isAuthorized,
            setIsAuthorized,
        }),
        [
            books,
            setBooks,
            cart,
            setCart,
            isLoading,
            setIsLoading,
            positionContent,
            setPositionContent,
            isAuthorized,
            setIsAuthorized,
        ],
    )
    return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export default BookContextProvider
