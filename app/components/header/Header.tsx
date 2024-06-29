'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'

import Cart from '@app/components/header/Cart'
import logo from '@public/logo.jpg'
import plugForImage from '@public/plug.png'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                src={logo ?? plugForImage}
                alt="Книжный план"
                width={150}
                height={100}
                loading="lazy"
            />
            <span className={styles.preview}>Пришло время читать🐱‍👤</span>
            <Cart />
        </header>
    )
}

export default Header
