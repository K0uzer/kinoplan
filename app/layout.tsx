import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import Header from '@components/header/Header'
import BookContextProvider from '@context/book'
import UserContextProvider from './context/user'

const inter = Inter({ subsets: ['latin'] })

import './globals.css'

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
                    <UserContextProvider>
                        <Header />
                    </UserContextProvider>
                    {children}
                </body>
            </BookContextProvider>
        </html>
    )
}

export default RootLayout
