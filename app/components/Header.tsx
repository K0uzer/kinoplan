import Image from 'next/image'
import React from 'react'

import logo from './../../public/svg/logo.jpg'

import styles from './Header.module.css'
import Popover from '@/app/components/Popover'

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                src={logo}
                alt="logo"
                width={150}
                height={100}
                loading="lazy"
            />
            <span className={styles.preview}>Пришло время читать🐱‍👤</span>
            <Popover />
        </header>
    )
}

export default Header
