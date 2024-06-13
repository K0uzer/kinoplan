export type Book = {
    id: string
    volumeInfo: {
        title: string
        author: string
        publishedDate: string
        language: string
    }
    imageLink: {
        smallThumbnail: string
        thumbnail: string
    }
    saleInfo: {
        listPrice: {
            amount: number
            currencyCode: string
        }
        country: string
    }
}
