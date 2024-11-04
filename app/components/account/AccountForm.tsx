'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from 'utils/supabase/client'
import { type User } from '@supabase/supabase-js'

import { useBook } from '@app/hooks/useBook'
import ButtonsContainer from './ButtonsContainer'

import styles from './account-form.module.css'

const actionPathLogout = '/auth/signout'

const dataForLabels = [
    { htmlFor: 'id', title: 'Идентификационный номер' },
    { htmlFor: 'email', title: 'Email' },
    { htmlFor: 'role', title: 'Роль' },
]

export default function AccountForm({ user }: { user: User | null }) {
    const supabase = createClient()
    const { isLoading, setIsLoading } = useBook()
    const [username, setUsername] = useState<string | null>(null)

    const dataFarInputs = [
        {
            id: 'id',
            type: 'text',
            value: user?.id || null,
            disabled: true,
        },
        {
            id: 'email',
            type: 'email',
            value: user?.email || null,
            disabled: true,
        },
        {
            id: 'role',
            type: 'text',
            value: user?.role || null,
            disabled: true,
        },
    ]

    const getProfile = useCallback(async () => {
        try {
            setIsLoading(true)

            const { data, error } = await supabase.auth.getUser()

            if (error) {
                console.log(error)
                throw error
            }

            if (data) {
                setUsername(data.user?.user_metadata.display_name)
            }
        } catch (error) {
            console.log('Ошибка при загрузки данных!')
        } finally {
            setIsLoading(false)
        }
    }, [setIsLoading, supabase])

    async function updateProfile(username: string | null) {
        try {
            setIsLoading(true)
            const updateAuthOfSupabase = async () =>
                await supabase.auth.updateUser({
                    data: { display_name: username },
                })
            updateAuthOfSupabase()
            alert('Данные пользователя изменены')
        } catch (error) {
            alert('Ошибка обновления данных')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    return (
        <section className={styles.formWidget}>
            <h2 className={styles.accountPreview}>Профиль</h2>
            <form action={actionPathLogout} method="post">
                {dataFarInputs.map(({ value, type, id, disabled }, index) => (
                    <div key={index}>
                        <label htmlFor={dataForLabels[index].htmlFor}>
                            {dataForLabels[index].title}
                        </label>
                        <input
                            id={id}
                            type={type}
                            value={value ?? ''}
                            disabled={disabled}
                        />
                    </div>
                ))}
                <div>
                    <label htmlFor="username">Имя</label>
                    <input
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(event) => setUsername(event.target.value)}
                        disabled={isLoading}
                    />
                </div>
                <ButtonsContainer
                    updateProfile={updateProfile}
                    username={username}
                />
            </form>
        </section>
    )
}
