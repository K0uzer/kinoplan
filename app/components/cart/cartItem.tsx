import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './CartItem.module.css'

const CartItem = ({ book }: { book: Book }) => {
    const { cart, setCart } = useBook()

    const incrementQuantity = () => {
        setCart((prevState) =>
            prevState.map((item) =>
                item.title === book.title
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item,
            ),
        )
    }

    const decrementQuantity = () => {
        setCart((prevState) =>
            prevState.map((item) =>
                item.quantity && item.title === book.title
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        )
    }

    const quantityBooks = cart.map(
        (item) => item.title === book.title && item.quantity,
    )

    return (
        <li className={styles.cartItem}>
            <p className={styles.itemContent}>{book.title}</p>
            <p className={styles.itemContent}>от {book.author}</p>
            <p className={styles.quantity}>Количество: {quantityBooks}</p>
            <button className={styles.button} onClick={incrementQuantity}>
                Добавить
            </button>
            <button className={styles.button} onClick={decrementQuantity}>
                Убрать
            </button>
        </li>
    )
}

export default CartItem
