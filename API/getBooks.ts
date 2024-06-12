import { Book } from '@/types/booksTypes'

const getBooks = (): Promise<Book[]> =>
    fetch('https://www.googleapis.com/books/v1/volumes?q=moki')
        .then((result) => result.json())
        .then((result) =>
            result.items.map((item: Book) => ({
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                publishedDate: item.volumeInfo.publishedDate,
                image: item.imageLinks.smallThumbnail,
                // language: item.language,
                // price: item.saleInfo.amount,
                // currency: item.saleInfo.currencyCode,
                // categories: item.volumeInfo.categories,
            })),
        )

export default getBooks
