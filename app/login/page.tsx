import React from 'react'

import { login, signup } from './actions'

import styles from './page.module.css'

const page = () => {
    return (
        <main className={styles.main}>
            {/* <form className={styles.form}>
                <h2 className={styles.preview}>
                    добро пожаловать на knigoplan
                </h2>
                <input
                    className={styles.input}
                    id="email"
                    type="email"
                    placeholder="Введите ваш Email"
                    required
                />
                <input
                    className={styles.input}
                    id="password"
                    type="password"
                    placeholder="Введите ваш пароль"
                    required
                />
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} formAction={login}>
                        Авторизоваться
                    </button>
                    <button className={styles.button} formAction={sigUp}>
                        Зарегестрироваться
                    </button>
                </div>
            </form> */}
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={login}>Log in</button>
                <button formAction={signup}>Sign up</button>
            </form>
        </main>
    )
}

export default page
