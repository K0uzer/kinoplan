'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

import Link from 'next/link'
import { PATH } from '@app/constants'
import Button from '@app/UI/Button'

import styles from '/page.module.css'

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = () => {
        alert('Произведена авторизация')
        // ИСПРАВИТЬ! ЧЕРЕЗ LINK
        window.location.href = PATH.MAIN
    }

    return (
        <main>
            <h1>Авторизация 🧑‍🍳</h1>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Введите свой логин" />
                <input type="password" placeholder="Введите свой пароль" />
                <button type="submit">Войти</button>
            </form>
        </main>
    )
}

export default SignInPage
