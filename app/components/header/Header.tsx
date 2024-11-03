'use client'

import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { usePathname } from 'next/navigation'

import Popover from '@components/header/Popover'
import { PATH } from '@app/constants'
import Link from 'next/link'

import styles from './Header.module.css'

const Header = () => {
    const pathname = usePathname()
    const cookies = document.cookie
    return (
        <header key={pathname} className={styles.header}>
            <Link href={PATH.MAIN}>
                <span className={styles.preview}>Пришло время читать🐱</span>
            </Link>
            {pathname === PATH.MAIN && (
                <div className={styles.containerOfButton}>
                    <Popover />
                    <Link
                        className={styles.link}
                        href={cookies ? PATH.PROFILE : PATH.AUTH}
                    >
                        <div className={styles.containerOfAuth}>
                            <span>Личный кабинет</span>
                            <UserOutlined />
                        </div>
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header
