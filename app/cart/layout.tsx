import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Книжный план',
    description: 'Приложение для продажи книг',
}

const CartLayout = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}

export default CartLayout
