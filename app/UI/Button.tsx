import { ReactNode } from 'react'

const Button = ({
    styles,
    event,
    children,
}: {
    styles: string
    event: () => number
    children: ReactNode
}) => {
    return (
        <button onClick={event} className={styles}>
            {children}
        </button>
    )
}

export default Button
