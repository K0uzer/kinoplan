import { MouseEventHandler, ReactNode } from 'react'

const Button = ({
    styles,
    onClick,
    children,
}: {
    styles: string
    onClick: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
}) => {
    return (
        <button onClick={onClick} className={styles}>
            {children}
        </button>
    )
}

export default Button
