import React from 'react'
import { Popover } from 'antd'
import Button from './Button'

const content = (
    <div>
        <p>Content</p>
    </div>
)

const Cart = () => (
    <Popover content={content} title="Товары в корзине:">
        <Button>Корзина</Button>
    </Popover>
)

export default Cart
