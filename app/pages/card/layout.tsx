import type { Metadata } from 'next'
import { ReactNode } from 'react'

import '@app/globals.css'

export const metadata: Metadata = {
    title: 'Книжный план',
    description: 'Приложение для продажи книг',
}

const BookLayout = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}

export default BookLayout