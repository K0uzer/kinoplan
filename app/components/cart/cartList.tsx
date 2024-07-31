import React from 'react'

import { useBook } from '@app/hooks/useBook'
import CartItem from './CartItem'

const CartList = () => {
    const { cart } = useBook()

    return (
<<<<<<< HEAD
        <>
            {!cart.length ? (
                <p>Корзина пуста :c</p>
            ) : (
                <ul>
                    {cart.map((book) => (
                        <CartItem key={book.id} book={book} />
                    ))}
                </ul>
            )}
        </>
=======
        <ul>
            {cart.map((book) => (
                <CartItem key={book.id} book={book} />
            ))}
        </ul>
>>>>>>> 22b3524b8f27bffa2cd587fa76b359583492b7d9
    )
}

export default CartList
