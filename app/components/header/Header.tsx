'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'

<<<<<<< HEAD
import Popover from '@app/components/header/Popover'
import logoImage from '@public/logo.jpg'
=======
import Cart from '@app/components/header/Cart'
import logo from '@public/logo.jpg'
>>>>>>> 22b3524b8f27bffa2cd587fa76b359583492b7d9
import plugForImage from '@public/plug.png'

import styles from './Header.module.css'

<<<<<<< HEAD
const Header = () =>
    useMemo(() => {
        return (
            <header className={styles.header}>
                <Image
                    src={logoImage ?? plugForImage}
                    alt="Книжный план"
                    width={150}
                    height={100}
                    loading="lazy"
                />
                <span className={styles.preview}>Пришло время читать🐱‍👤</span>
                <Popover />
            </header>
        )
    }, [])
=======
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
>>>>>>> 22b3524b8f27bffa2cd587fa76b359583492b7d9

export default Header
