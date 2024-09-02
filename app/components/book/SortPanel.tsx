'use client'
import React, { useState } from 'react'
import { CaretUpOutlined } from '@ant-design/icons'

import { Book, TSortState } from '@app/types'
import { useBook } from '@app/hooks/useBook'
import { INITIAL_STATE_OF_SORT } from '@app/constants'

import styles from './SortPanel.module.css'

const sortingFunctions = {
    author: (curr: Book, exp: Book) => curr.author.localeCompare(exp.author),
    category: (curr: Book, exp: Book) =>
        curr.category.localeCompare(exp.category),
    publishedDate: (curr: Book, exp: Book) =>
        curr.publishedDate.localeCompare(exp.publishedDate),
}

const TITLES_BUTTONS = {
    author: 'Авторы',
    category: 'Категории',
    publishedDate: 'Дата публикации',
}

const SortPanel = () => {
    const [sortState, setSortState] = useState<{ [key: string]: TSortState[] }>(
        INITIAL_STATE_OF_SORT,
    )
    const { books, setBooks } = useBook()

    const sortBooks = (key: string) => {
        const { state, direction } = sortState[key]

        const sortedBooks = [...books].sort(sortingFunctions[key])

        const changedSortingState = {
            state: direction === 'asc' ? false : true,
            direction: direction === 'asc' && state ? 'desk' : 'asc',
        }

        setBooks(sortedBooks[direction === 'asc' ? 'reverse' : 'slice']())
        setSortState({ ...INITIAL_STATE_OF_SORT, [key]: changedSortingState })
    }

    return Object.keys(INITIAL_STATE_OF_SORT).map((key, index) => (
        <div
            onClick={() => sortBooks(key)}
            className={`${styles.blockSorting} ${
                sortState[key].state ? 'blockSortingActive' : ''
            }`}
            key={index}
        >
            {sortState[key].state && (
                <CaretUpOutlined
                    style={{
                        marginRight: 10,
                        rotate:
                            sortState[key].direction === 'asc'
                                ? '180deg'
                                : '0deg',
                        transition: '0.3s',
                    }}
                />
            )}
            <p>{TITLES_BUTTONS[key]}</p>
        </div>
    ))
}

export default SortPanel
