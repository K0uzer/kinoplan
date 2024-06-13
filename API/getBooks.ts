import { URL_SERVER } from '@/app/constants/const'
import { Book } from '@/types'

const getBooks = () => fetch(URL_SERVER).then((result) => result.json())

export default getBooks
