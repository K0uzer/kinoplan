import { MouseEventHandler, ReactNode } from 'react'

const Button = ({
    styles,
    onClick,
    children,
    type,
}: {
    styles: string
    onClick: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
    type?: string
}) => {
    return (
        <button onClick={onClick} className={styles}>
            {children}
        </button>
    )
}

export default Button
