export const URL_SERVER = 'https://www.googleapis.com/books/v1/volumes?q=all'

export const INITIAL_POSITION: 'table' | 'lines' = 'table'

export const PATH = {
    main: '/',
    cart: '/cart',
}

export enum KIND_OF_BOOKS_FILTER {
    AUTHORS = 'authorsBooks',
    PUBLISHED_DATES = 'publishedDateBooks',
    CATEGORIES = 'categoriesBooks',
}

export const INITIAL_OPTIONS_FILTERS = {
    [KIND_OF_BOOKS_FILTER.AUTHORS]: 'Without filter',
    [KIND_OF_BOOKS_FILTER.PUBLISHED_DATES]: 'Without filter',
    [KIND_OF_BOOKS_FILTER.CATEGORIES]: 'Without filter',
}

export const TITLE_SELECTS_OF_FILTER = [
    KIND_OF_BOOKS_FILTER.AUTHORS,
    KIND_OF_BOOKS_FILTER.PUBLISHED_DATES,
    KIND_OF_BOOKS_FILTER.CATEGORIES,
]

export const KIND_FILTER_PROPERTIES = {
    [KIND_OF_BOOKS_FILTER.AUTHORS]: 'author',
    [KIND_OF_BOOKS_FILTER.PUBLISHED_DATES]: 'publishedDate',
    [KIND_OF_BOOKS_FILTER.CATEGORIES]: 'category',
}

export const enum KINDS_KEYS_LOCAL_STORAGE {
    BOOKS = 'books',
    CART = 'cart',
}
