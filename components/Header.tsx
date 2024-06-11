import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <Link href="/films">Home</Link>
            <Link href="/">Корзина</Link>
        </header>
    )
}

export default Header
