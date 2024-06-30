import React from 'react'
import Link from 'next/link'
import { Empty } from 'antd'

const Result: React.FC = () => (
    <>
        <Empty description={true} />
        <Link key="console" href="/">
            Перейти на главную страницу
        </Link>
    </>
)

export default Result
