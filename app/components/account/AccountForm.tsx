'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from 'utils/supabase/client'
import { type User } from '@supabase/supabase-js'

import { useBook } from '@app/hooks/useBook'
import ButtonsContainer from './ButtonsContainer'

import styles from './account-form.module.css'

const actionPathLogout = '/auth/signout'

export default function AccountForm({ user }: { user: User | null }) {
    const supabase = createClient()
    const { isLoading, setIsLoading } = useBook()
    const [username, setUsername] = useState<string | null>(null)

    const getProfile = useCallback(async () => {
        try {
            setIsLoading(true)

            const { data, error } = await supabase.auth.getUser()

            console.log(data)

            if (error) {
                console.log(error)
                throw error
            }

            if (data) {
                setUsername(data.user?.user_metadata.display_name)
            }
        } catch (error) {
            console.log('Error loading user data!')
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
            alert('Имя пользователя изменено')
        } catch (error) {
            alert('Ошибка обновления данных')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    const dataForLabels = [
        { htmlFor: 'id', title: 'Идентификационный номер' },
        { htmlFor: 'email', title: 'Email' },
        { htmlFor: 'username', title: 'Имя' },
        { htmlFor: 'phone', title: 'Телефон' },
        { htmlFor: 'role', title: 'Роль' },
    ]
    const dataFarInputs = [
        {
            id: 'id',
            type: 'number',
            value: user?.email,
            disabled: true,
        },
        {
            id: 'email',
            type: 'email',
            value: user?.email,
            disabled: true,
        },
        {
            id: 'username',
            type: 'text',
            value: user?.email,
            disabled: isLoading,
        },
        {
            id: 'phone',
            type: 'phone',
            value: user?.email,
            disabled: isLoading,
        },
        {
            id: 'role',
            type: 'text',
            value: user?.email,
            disabled: true,
        },
    ]

    return (
        <section className={styles.formWidget}>
            <h2 className={styles.accountPreview}>Профиль</h2>
            <form action={actionPathLogout} method="post">
                {/* {dataFarInputs.map(({ value, type, id, disabled }, index) => (
                    <div key={type}>
                        <label htmlFor="id">Идентификационный номер</label>
                        <input
                            id={id}
                            type={type}
                            value={value}
                            disabled={disabled}
                        />
                    </div>
                ))} */}
                <div>
                    <div>
                        <label htmlFor="id">Идентификационный номер</label>
                        <input
                            id="id"
                            type="number"
                            value={user?.email}
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={user?.email}
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Имя</label>
                        <input
                            id="username"
                            type="text"
                            value={username || ''}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Телефон</label>
                        <input
                            id="phone"
                            type="phone"
                            value={username || ''}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label htmlFor="role">Роль</label>
                        <input
                            id="role"
                            type="text"
                            value={username || ''}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            disabled
                        />
                    </div>
                </div>
                <ButtonsContainer
                    updateProfile={updateProfile}
                    username={username}
                />
            </form>
        </section>
    )
}
