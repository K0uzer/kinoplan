import { login, signup } from './actions'

import styles from './page.module.css'

const page = () => {
    return (
        <main className={styles.main}>
            <form className={styles.form}>
                <h2 className={styles.preview}>
                    добро пожаловать на knigoplan
                </h2>
                <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Введите ваш Email"
                    required
                />
                <input
                    className={styles.input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Введите ваш пароль"
                    required
                />
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} formAction={login}>
                        Авторизоваться
                    </button>
                    <button className={styles.button} formAction={signup}>
                        Зарегестрироваться
                    </button>
                </div>
            </form>
        </main>
    )
}

export default page
