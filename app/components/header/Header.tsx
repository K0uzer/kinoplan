'use client'

import React from 'react'
import { UserOutlined } from '@ant-design/icons'

import Popover from '@components/header/Popover'
import { PATH } from '@app/constants'
import Link from 'next/link'

import styles from './Header.module.css'

// ИЗМЕНИ location.pathname === PATH.MAIN ТК ПРИ ОНО РАЗОВО СОХРАНЯЕТСЯ И НУЖЕН РЕ РЕНДЕРИНГ ДЛЯ ТОГО, ЧТОБЫ ОН ПОЯВИЛСЯ, ЛИБО ИСЧЕЗ
// ТК location.pathname === PATH.MAIN ПРОВЕРЯЕТСЯ ОДИН РАЗ

const Header = () => {
    const checkCookies = () => {}
    return (
        <header className={styles.header}>
            <Link href={PATH.MAIN}>
                <span className={styles.preview}>Пришло время читать🐱</span>
            </Link>
            <div className={styles.containerOfButton}>
                <Popover />
                <Link className={styles.link} href={PATH.PROFILE}>
                    <div
                        onClick={checkCookies}
                        className={styles.containerOfAuth}
                    >
                        <span>Личный кабинет</span>
                        <UserOutlined />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header
