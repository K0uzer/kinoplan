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
    return (
        <header className={styles.header}>
            <span className={styles.preview}>Пришло время читать🐱</span>
            <div className={styles.containerOfButton}>
                <Popover />
                {location.pathname === PATH.MAIN && (
                    <Link className={styles.link} href={PATH.PROFILE}>
                        <div className={styles.containerOfAuth}>
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
