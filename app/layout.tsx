import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'KnigaPlan',
    description: 'Приложение для продажи книг',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
