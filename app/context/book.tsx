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
    setBook: Dispatch<SetStateAction<Book[]>>
    cart: Book[]
    setCart: Dispatch<SetStateAction<Book[]>>
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
    bought: boolean
    setBought: Dispatch<SetStateAction<boolean>>
}

export const BookContext = createContext<ContextBookType>({
    books: [],
    setBook: () => {},
    cart: [],
    setCart: () => {},
    isLoading: false,
    setIsLoading: () => {},
    bought: false,
    setBought: () => {},
})

const BookContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [books, setBook] = useState<Book[]>([])
    const [cart, setCart] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [bought, setBought] = useState(false)

    const value: ContextBookType = useMemo(
        () => ({
            books,
            setBook,
            cart,
            setCart,
            isLoading,
            setIsLoading,
            bought,
            setBought,
        }),
        [
            books,
            setBook,
            cart,
            setCart,
            isLoading,
            setIsLoading,
            bought,
            setBought,
        ],
    )
    return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export default BookContextProvider
