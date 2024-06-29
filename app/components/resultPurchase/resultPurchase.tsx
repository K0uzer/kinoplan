'use client'

import React from 'react'
import Link from 'next/link'
import { Result } from 'antd'

import { useBook } from '@app/hooks/useBook'

const ResultPurchase: React.FC = () => {
    const { setCart, setBought } = useBook()

    const payForThePurchase = () => {
        setCart([])
        setBought((prevState) => !prevState)
    }
    return (
        <Result
            status="success"
            title="Purchased new book done!"
            subTitle="Purchase"
            extra={[
                <Link onClick={payForThePurchase} key="console" href="/">
                    Go to the main page
                </Link>,
            ]}
        />
    )
}

export default ResultPurchase
