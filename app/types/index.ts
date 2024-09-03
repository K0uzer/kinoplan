import { TITLES_BUTTONS } from "@app/components/book/SortPanel"

export type BookFromServer = {
    id: number
    volumeInfo: {
        title: string
        authors: string[]
        publishedDate: string
        imageLinks: {
            smallThumbnail: string
        }
        categories: string[]
    }
}

export type Book = {
    id: number
    title: string
    author: string
    publishedDate: string
    image: string
    category: string
    count: number
}

export type TSortState = {
    state: boolean
    direction: 'asc' | 'desk'
}

export type TITLES_BUTTONS_KEY = keyof typeof TITLES_BUTTONS

export type TITLES_BUTTONS_MAPPER = {
    [P in TITLES_BUTTONS_KEY]: string
}
