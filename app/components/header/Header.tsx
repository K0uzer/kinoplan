'use client'

import Image from 'next/image'
import React from 'react'

import Popover from '@components/header/Popover'
import logoImage from '@public/logo.jpg'
import plugForImage from '@public/plug.png'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                src={logoImage ?? plugForImage}
                alt="Книжный план"
                loading="lazy"
                className={styles.imageOfPreview}
            />
            <span className={styles.preview}>Пришло время читать🐱‍👤</span>
            <Popover />
        </header>
    )
}

export default Header
