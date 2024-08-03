'use client'
import React, { useState } from 'react'

import { useBook } from '@app/hooks/useBook'

import styles from './FiltersPanel.module.css'
import { Book } from '@app/types'

const initialOptions = {
    authorsBooks: 'Without filter',
    publishedDateBooks: 'Without filter',
    categoriesBooks: 'Without filter',
}

type OptionType = typeof initialOptions

const FiltersPanel = () => {
    const { setBooks } = useBook()
    const [selectedOptions, setSelectedOptions] = useState(initialOptions)

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const { name, value } = event.target
        setSelectedOptions({
            ...selectedOptions,
            [name]: value,
        })
    }

    const booksFromLocalStorage: Book[] =
        localStorage.getItem('books') !== null
            ? JSON.parse(localStorage.getItem('books') as string)
            : []

    const authorsBooksUnique = [
        ...new Set([...booksFromLocalStorage].map((item) => item.author)),
    ]

    const categoriesBooksUnique = [
        ...new Set([...booksFromLocalStorage].map((item) => item.category)),
    ]

    const publishedDateBooksUnique = [
        ...new Set(
            [...booksFromLocalStorage].map((item) =>
                item.publishedDate.slice(0, -6),
            ),
        ),
    ].sort()

    const getFilteredOfAuthorsBooks = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const key = event.target.value
        if (key === initialOptions.authorsBooks) {
            setBooks(booksFromLocalStorage)
        } else {
            const filteredBooks = booksFromLocalStorage.filter(
                (item) => item.author === key,
            )
            setBooks(filteredBooks)
        }
        setSelectedOptions({
            ...initialOptions,
            authorsBooks: key,
        })
    }

    const getFilteredOfCategoriesBooks = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const key = event.target.value
        if (key === initialOptions.categoriesBooks) {
            setBooks(booksFromLocalStorage)
        } else {
            const filteredBooks = booksFromLocalStorage.filter(
                (item) => item.category === key,
            )
            setBooks(filteredBooks)
        }
        setSelectedOptions({
            ...initialOptions,
            categoriesBooks: key,
        })
    }

    const getFilteredOfPublishedDateBooks = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const key = event.target.value
        if (key === initialOptions.publishedDateBooks) {
            setBooks(booksFromLocalStorage)
        } else {
            const filteredBooks = booksFromLocalStorage.filter((item) =>
                item.publishedDate.includes(key),
            )
            setBooks(filteredBooks)
        }
        setSelectedOptions({
            ...initialOptions,
            publishedDateBooks: key,
        })
    }

    return (
        <div>
            <select
                name="authorsBooks"
                onChange={(event) => {
                    handleSelectChange(event)
                    getFilteredOfAuthorsBooks(event)
                }}
                className={styles.select}
                value={selectedOptions.authorsBooks}
            >
                <option value="Without filter">Фильтр по авторам</option>
                {authorsBooksUnique.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <select
                name="publishedDateBooks"
                onChange={(event) => {
                    handleSelectChange(event)
                    getFilteredOfPublishedDateBooks(event)
                }}
                className={styles.select}
                value={selectedOptions.publishedDateBooks}
            >
                <option value="Without filter">Фильтр по датам</option>
                {publishedDateBooksUnique.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <select
                name="categoriesBooks"
                onChange={(event) => {
                    handleSelectChange(event)
                    getFilteredOfCategoriesBooks(event)
                }}
                className={styles.select}
                value={selectedOptions.categoriesBooks}
            >
                <option value="Without filter">Фильтр категорий</option>
                {categoriesBooksUnique.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FiltersPanel
