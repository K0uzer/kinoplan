'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

import Link from 'next/link'
import { PATH } from '@app/constants'
import Button from '@app/UI/Button'
import supabase from './../../../supabase'

import styles from '/page.module.css'
import { headers } from 'next/headers'

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const signIn = async () => {
        const origin = headers().get('origin')
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                provider: '',
                options: {
                    redirectTo: `${origin}${PATH.SIGN_IN_SUCCESS}`,
                },
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main>
            <h1>Авторизация 🧑‍🍳</h1>
            <form method="post" onSubmit={signIn}>
                <input
                    type="text"
                    placeholder="Введите свой логин"
                    {...register('email')}
                />
                {errors.login && <div>Ошибка email</div>}
                <input
                    type="password"
                    placeholder="Введите свой пароль"
                    {...register('password')}
                />
                {errors.password && <div>Ошибка password</div>}
                <button type="submit">Войти</button>
            </form>
        </main>
    )
}

export default SignInPage
