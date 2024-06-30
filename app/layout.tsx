import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@components/header/Header'
import BookContextProvider from '@context/book'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Книжный план',
    description: 'Приложение для продажи книг',
    icons: '@public/logo.jpg',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="ru">
            <BookContextProvider>
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </BookContextProvider>
        </html>
    )
}

export default RootLayout
