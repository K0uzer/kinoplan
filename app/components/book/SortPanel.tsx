import React from 'react'

import { useBook } from '@app/hooks/useBook'

import styles from './SortPanel.module.css'

const typesSorts = ['Без сортировки', 'Жанр', 'Год', 'Автор']

const SortPanel = () => {
    const { setBooks } = useBook()

    const getSortedBooks = (event: React.FormEvent<HTMLFieldSetElement>) => {
        const key = event.target.value
        switch (key) {
            case 'Без сортировки':
                setBooks(JSON.parse(localStorage.getItem('books')))
                break
            case 'Автор':
                setBooks((prevState) =>
                    prevState.toSorted((curr, ext) =>
                        curr.author.localeCompare(ext.author),
                    ),
                )
                break
            case 'Жанр':
                setBooks((prevState) =>
                    prevState.toSorted((curr, ext) =>
                        curr.category.localeCompare(ext.category),
                    ),
                )
                break
            case 'Год':
                setBooks((prevState) =>
                    prevState.toSorted((curr, ext) =>
                        curr.publishedDate.localeCompare(ext.publishedDate),
                    ),
                )
                break
        }
    }

    return (
        <fieldset
            onChange={(event) => getSortedBooks(event)}
            className={styles.fieldset}
        >
            <legend>Сортировка</legend>
            {typesSorts.map((item, index) => (
                <div className={styles.blockRadio} key={index}>
                    <input type="radio" id={item} name="drone" value={item} />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </fieldset>
    )
}

export default SortPanel
