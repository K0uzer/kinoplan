'use client'
import React, { useState } from 'react'
import { CaretUpOutlined } from '@ant-design/icons'

import { useBook } from '@app/hooks/useBook'
import { INITIAL_STATE_OF_SORT } from '@app/constants'
import { useLocalStorage } from '@app/hooks/useLocalStorage'

import styles from './SortPanel.module.css'

const SortPanel = () => {
    const { setBooks } = useBook()
    const [stateSort, setStateSort] = useState(INITIAL_STATE_OF_SORT)
    const { getLocalStorage } = useLocalStorage()

    const getSortedBooks = (item: string) => {
        setStateSort((prevSortState) => {
            const newSortState = { ...prevSortState }
            newSortState[item] = {
                state: prevSortState[item].count < 2,
                count:
                    prevSortState[item].count < 2
                        ? prevSortState[item].count + 1
                        : 0,
            }
            Object.keys(INITIAL_STATE_OF_SORT).forEach((key) => {
                if (key !== item) newSortState[key] = { state: false, count: 0 }
            })
            return newSortState
        })

        setBooks((prevBooksState) => {
            const newBookState = [...prevBooksState]
            console.log(stateSort[item])
            console.log(newBookState)
            if (stateSort[item].count === 1) {
                return [...newBookState].sort(
                    (currentElement, subsequentElement) =>
                        currentElement.author.localeCompare(
                            subsequentElement.author,
                        ),
                )
            } else if (stateSort[item].count === 2) {
                return [...newBookState].sort(
                    (currentElement, subsequentElement) =>
                        subsequentElement.author.localeCompare(
                            currentElement.author,
                        ),
                )
            } else {
                return getLocalStorage('books')
            }
        })
    }

    return Object.keys(INITIAL_STATE_OF_SORT).map((item, index) => (
        <div
            onClick={() => getSortedBooks(item)}
            className={`${styles.blockSorting} ${
                stateSort[item].count ? 'blockSortingActive' : ''
            }`}
            key={index}
        >
            {stateSort[item].state && (
                <CaretUpOutlined
                    style={{
                        marginRight: 10,
                        rotate:
                            stateSort[item].count % 2 === 0 ? '180deg' : '0deg',
                        transition: '0.3s',
                    }}
                />
            )}
            <p>{item}</p>
        </div>
    ))
}

export default SortPanel
