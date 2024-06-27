'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'

import Popover from '@app/components/header/Popover'
import logo from '@public/logo.jpg'
import plugForImage from '@public/plug.png'

import styles from './Header.module.css'

const Header = () =>
    useMemo(() => {
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
                <Popover />
            </header>
        )
    }, [])

export default Header
