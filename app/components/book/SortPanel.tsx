import React from 'react'

import { useBook } from '@app/hooks/useBook'

import styles from './SortPanel.module.css'
import { Book } from '@app/types'

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
        setBooks((prevState: Book[]) =>
            prevState.toSorted((curr, ext) =>
                curr[sorty].localeCompare(ext[sorty]),
            ),
        )
    }

    return (
        <fieldset
            onChange={(event) => getSortedBooks(event)}
            className={styles.fieldset}
        >
            <legend>Сортировка</legend>
            {Object.keys(sortByProperties).map((item, index) => (
                <div className={styles.blockRadio} key={index}>
                    <input type="radio" id={item} name="drone" value={item} />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </fieldset>
    )
}

export default SortPanel
