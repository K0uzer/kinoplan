'use client'
import React, { useState } from 'react'
import { CaretUpOutlined } from '@ant-design/icons'

import { useBook } from '@app/hooks/useBook'
import { INITIAL_STATE_OF_SORT } from '@app/constants'
import { useLocalStorage } from '@app/hooks/useLocalStorage'

import styles from './SortPanel.module.css'

const SortPanel = () => {
    const [sortState, setSortState] = useState(INITIAL_STATE_OF_SORT)
    const { setBooks } = useBook()
    const { getLocalStorage } = useLocalStorage()

    const getSortedBooks = (item: string) => {}

    return Object.keys(INITIAL_STATE_OF_SORT).map((item, index) => (
        <div
            onClick={() => getSortedBooks(item)}
            className={`${styles.blockSorting} ${
                sortState[item].direction ? 'blockSortingActive' : ''
            }`}
            key={index}
        >
            {sortState[item].state && (
                <CaretUpOutlined
                    style={{
                        marginRight: 10,
                        rotate:
                            sortState[item].direction === 'asc'
                                ? '180deg'
                                : '0deg',
                        transition: '0.3s',
                    }}
                />
            )}
            <p>{item}</p>
        </div>
    ))
}

export default SortPanel
