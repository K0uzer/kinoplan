import { ReactNode } from 'react'

const Button = ({
    styles,
    children,
}: {
    styles: string
    children: ReactNode
}) => {
    return <button className={styles}>{children}</button>
}

export default Button
