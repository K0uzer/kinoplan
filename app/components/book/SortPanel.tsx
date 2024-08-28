import React from 'react'
import { CaretUpOutlined } from '@ant-design/icons'

import { useBook } from '@app/hooks/useBook'
import { Book } from '@app/types'

import styles from './SortPanel.module.css'

const sortByProperties: Record<string, keyof Book> = {
    Автор: 'author',
    Жанр: 'category',
    Год: 'publishedDate',
}

const SortPanel = () => {
    const { setBooks } = useBook()

    const getSortedBooks = (event: React.FormEvent<HTMLFieldSetElement>) => {
        const key = (event.target as HTMLInputElement).value
        const sorty = sortByProperties[key]
        setBooks((prevState) =>
            prevState.toSorted((curr, ext) =>
                curr[sorty].toString().localeCompare(ext[sorty].toString()),
            ),
        )
    }

    return Object.keys(sortByProperties).map((item, index) => (
        <div className={styles.blockSorting} key={index}>
            <CaretUpOutlined />
            <p>{item}</p>
        </div>
    ))
}

export default SortPanel
