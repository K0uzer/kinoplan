'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { UserOutlined } from '@ant-design/icons'

import Popover from '@components/header/Popover'
import { PATH } from '@app/constants'
import Link from 'next/link'

import styles from './Header.module.css'
import { NextResponse } from 'next/server'
import UserContextProvider from '@app/context/user'
import { useUser } from '@app/hooks/useUser'

// ИЗМЕНИ location.pathname === PATH.MAIN ТК ПРИ ОНО РАЗОВО СОХРАНЯЕТСЯ И НУЖЕН РЕ РЕНДЕРИНГ ДЛЯ ТОГО, ЧТОБЫ ОН ПОЯВИЛСЯ, ЛИБО ИСЧЕЗ
// ТК location.pathname === PATH.MAIN ПРОВЕРЯЕТСЯ ОДИН РАЗ

const Header = () => {
    const { isAuthorized, setIsAuthorized } = useUser()

    const router = useRouter()
    const checkCookies = () => {
        const isUserAuth = document.cookie.includes('AuthToken')
        return isUserAuth && isAuthorized
            ? ''
            : setIsAuthorized(true)
    }
    return (
        <header className={styles.header}>
            <span className={styles.preview}>Пришло время читать🐱</span>
            <div className={styles.containerOfButton}>
                <Popover />
                {location.pathname === PATH.MAIN && (
                    <Link className={styles.link} href={PATH.PROFILE}>
                        <div
                            onClick={checkCookies}
                            className={styles.containerOfAuth}
                        >
                            <span>Личный кабинет</span>
                            <UserOutlined />
                        </div>
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Header
