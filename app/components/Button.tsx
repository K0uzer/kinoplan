import { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
    return <button>{children}</button>
}

export default Button
