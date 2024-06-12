import React from 'react'
import { Button, Popover } from 'antd'

const content = (
    <div>
        <p>Content</p>
    </div>
)

const App: React.FC = () => (
    <Popover content={content} title="Товары в корзине:">
        <Button type="primary">Корзина</Button>
    </Popover>
)

export default App
