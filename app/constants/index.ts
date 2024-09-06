import { TITLES_BUTTONS_MAPPER } from '@app/types'

const URL_SERVER = 'https://www.googleapis.com/books/v1/volumes?q=all'

const INITIAL_POSITION: 'table' | 'lines' = 'table'

const PATH = {
    MAIN: '/',
    CART: '/pages/cart',
    AUTH: '/pages/sign-in',
    REGISTRATION: '/pages/logout',
    PERSONAL_ACCOUNT: '/personal-account',
}

enum KIND_OF_BOOKS_FILTER {
    AUTHORS = 'authorsBooks',
    PUBLISHED_DATES = 'publishedDateBooks',
    CATEGORIES = 'categoriesBooks',
}

const INITIAL_OPTIONS_FILTERS = {
    [KIND_OF_BOOKS_FILTER.AUTHORS]: 'Without filter',
    [KIND_OF_BOOKS_FILTER.PUBLISHED_DATES]: 'Without filter',
    [KIND_OF_BOOKS_FILTER.CATEGORIES]: 'Without filter',
}

const TITLE_SELECTS_OF_FILTER = [
    KIND_OF_BOOKS_FILTER.AUTHORS,
    KIND_OF_BOOKS_FILTER.PUBLISHED_DATES,
    KIND_OF_BOOKS_FILTER.CATEGORIES,
]

const KIND_FILTER_PROPERTIES = {
    [KIND_OF_BOOKS_FILTER.AUTHORS]: 'author',
    [KIND_OF_BOOKS_FILTER.PUBLISHED_DATES]: 'publishedDate',
    [KIND_OF_BOOKS_FILTER.CATEGORIES]: 'category',
}

enum KINDS_KEYS_LOCAL_STORAGE {
    BOOKS = 'books',
    CART = 'cart',
    RESULT_FETCH = 'resultFetch',
}

const INITIAL_STATE_OF_SORT = {
    author: {
        state: false,
        direction: 'desk',
    },
    category: {
        state: false,
        direction: 'desk',
    },
    publishedDate: {
        state: false,
        direction: 'desk',
    },
}

const TITLES_BUTTONS: TITLES_BUTTONS_MAPPER = {
    author: 'Авторы',
    category: 'Категории',
    publishedDate: 'Дата публикации',
}

export {
    URL_SERVER,
    INITIAL_POSITION,
    PATH,
    KIND_OF_BOOKS_FILTER,
    INITIAL_OPTIONS_FILTERS,
    TITLE_SELECTS_OF_FILTER,
    KIND_FILTER_PROPERTIES,
    KINDS_KEYS_LOCAL_STORAGE,
    INITIAL_STATE_OF_SORT,
    TITLES_BUTTONS,
}
