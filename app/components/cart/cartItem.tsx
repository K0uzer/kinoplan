import { Book } from '@app/types'
import { useBook } from '@app/hooks/useBook'

import styles from './CartItem.module.css'

const CartItem = ({ book }: { book: Book }) => {
    const { cart, setCart } = useBook()

<<<<<<< HEAD
    const quantityBooks = cart.map(
        (element) => element.title === book.title && element.count,
    )

    const incrementCount = cart.map((element) =>
        element.title === book.title
            ? { ...element, count: element.count + 1 }
            : element,
    )

    const decrementCount = cart.map((element) =>
        element.title === book.title
            ? { ...element, count: element.count - 1 }
            : element,
    )

    console.log('РЕНДЕР')

    const incrementQuantity = () => setCart(() => incrementCount)

    const decrementQuantity = () =>
        !quantityBooks
            ? setCart(() => decrementCount)
            : setCart((prevState) =>
                  prevState.filter((item) => item.title !== book.title),
              )
=======
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
>>>>>>> 22b3524b8f27bffa2cd587fa76b359583492b7d9

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
