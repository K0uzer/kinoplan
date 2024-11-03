'use client'
import React from 'react'

import styles from './account-form.module.css'
import { useBook } from '@app/hooks/useBook'

const ButtonsContainer = ({
    updateProfile,
    username,
}: {
    username: string | null
    updateProfile: (username: string | null) => void
}) => {
    const { isLoading } = useBook()

    return (
        <>
            <div>
                <button
                    className={`${styles.primary} ${styles.block} ${styles.button}`}
                    onClick={() => updateProfile(username)}
                    disabled={isLoading}
                >
                    {isLoading ? 'Загрузка ...' : 'Обновить'}
                </button>
            </div>
            <div>
                <button
                    className={` ${styles.block} ${styles.button}`}
                    type="submit"
                >
                    Выход
                </button>
            </div>
        </>
    )
}

export default ButtonsContainer
