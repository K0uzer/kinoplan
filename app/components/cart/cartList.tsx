import React from 'react'

import { useBook } from '@app/hooks/useBook'
import CartItem from './CartItem'

const CartList = () => {
    const { cart } = useBook()

    return (
        <ul>
            {cart.map((book) => (
                <CartItem key={book.id} book={book} />
            ))}
        </ul>
    )
}

export default CartList
