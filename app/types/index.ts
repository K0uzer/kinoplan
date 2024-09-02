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
