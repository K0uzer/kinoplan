import React from 'react'

import { useBook } from '@app/hooks/useBook'

import styles from './FiltersPanel.module.css'

const FiltersPanel = () => {
    const { books } = useBook()

    const getFilteredBooks = (event: React.FormEvent<HTMLFieldSetElement>) => {
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
        <div>
            <select
                onChange={(event) => getFilteredBooks(event)}
                className={styles.select}
            >
                <option value="Without filter">Фильтр по автору</option>
                {books.map((item, index) => (
                    <option key={index} value={item.author}>
                        {item.author}
                    </option>
                ))}
            </select>
            <select
                onChange={(event) => getFilteredBooks(event)}
                className={styles.select}
            >
                <option value="Without filter">Фильтр по выпуску</option>
                {books.map((item, index) => (
                    <option key={index} value={item.publishedDate}>
                        {item.publishedDate}
                    </option>
                ))}{' '}
                q
            </select>
            <select
                onChange={(event) => getFilteredBooks(event)}
                className={styles.select}
            >
                <option value="Without filter">Фильтр категории</option>
                {books.map((item, index) => (
                    <option key={index} value={item.category}>
                        {item.category}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FiltersPanel
