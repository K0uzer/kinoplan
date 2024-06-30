import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Книжный план',
    description: 'Сайт для продажи книг',
}

const CartLayout = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}

export default CartLayout
