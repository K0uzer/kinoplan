import Link from 'next/link'
import React from 'react'

const Registration = () => {
    return (
        <div>
            <h1>Регистрация 🧑‍🍳</h1>
            <form method="post" onSubmit={signIn}>
                <input
                    type="text"
                    placeholder="Введите свой логин"
                    {...register('email')}
                    required
                />
                {errors.login && <div>Ошибка email</div>}
                <input
                    type="password"
                    placeholder="Введите свой пароль"
                    {...register('password')}
                    required
                />
                {errors.password && <div>Ошибка password</div>}
                <button type="submit">Зарегистрироваться</button>
                <Link href="/sign-in">У меня уже есть аккаунт</Link>
            </form>
        </div>
    )
}

export default Registration
