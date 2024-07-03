import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './CartItem.module.css'

const CartItem = ({ book }: { book: Book }) => {
    const { cart, setCart } = useBook()

    const incrementQuantity = () => {
        setCart((prevState) =>
            prevState.map((item) => ({ ...item, quantity: item.quantity + 1 })),
        )
    }

    const decrementQuantity = () => {
        setCart((prevState) => prevState)
    }

    const quantityBooks = cart.filter(
        (item) => item.title === book.title,
    ).length

    return (
        <li className={styles.cartItem}>
            <p className={styles.itemContent}>{book.title}</p>
            <p className={styles.itemContent}>от {book.author}</p>
            <p className={styles.quantity}>Количество: {quantityBooks}</p>
            <button className={styles.button} onClick={incrementQuantity}>
                Добавить
            </button>
            {
                <button className={styles.button} onClick={decrementQuantity}>
                    Убрать
                </button>
            }
        </li>
    )
}

export default CartItem
