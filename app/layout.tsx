import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'КиноПлан',
    description: 'Приложение для продажи книг',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default RootLayout