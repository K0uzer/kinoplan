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

export type ContextBookType = {
    books: Book[]
    setBooks: Dispatch<SetStateAction<Book[]>>
    cart: Book[]
    setCart: Dispatch<SetStateAction<Book[]>>
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const BookContext = createContext<ContextBookType>({
    books: [],
    setBooks: () => {},
    cart: [],
    setCart: () => {},
    isLoading: false,
    setIsLoading: () => {},
})

const BookContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([])
    const [cart, setCart] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const value: ContextBookType = useMemo(
        () => ({
            books,
            setBooks,
            cart,
            setCart,
            isLoading,
            setIsLoading,
        }),
        [books, setBooks, cart, setCart, isLoading, setIsLoading],
    )
    return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export default BookContextProvider
