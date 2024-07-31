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
<<<<<<< HEAD
    count: number
=======
    quantity: number
>>>>>>> 22b3524b8f27bffa2cd587fa76b359583492b7d9
}
