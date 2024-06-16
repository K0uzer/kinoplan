'use client'

import React from 'react'
import { Popover } from 'antd'
import Button from './Button'

const Content = () => {
    return (
        <div>
            <p>Content</p>
        </div>
    )
}

const Cart = () => (
    <Popover content={Content} title="Товары в корзине:">
        <Button>Корзина</Button>
    </Popover>
)

export default Cart
