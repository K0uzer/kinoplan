'use client'
import React, { useState } from 'react'

import { useBook } from '@app/hooks/useBook'
import { Book } from '@app/types'
import {
    INITIAL_OPTIONS_FILTERS,
    KIND_FILTER_PROPERTIES,
    TITLE_SELECTS_OF_FILTER,
} from '@app/constants'

import styles from './FiltersPanel.module.css'

interface FilterProperties {
    [key: string]: keyof Book
}

const booksFromLocalStorage: Book[] =
    localStorage.getItem('books') !== null
        ? JSON.parse(localStorage.getItem('books') as string)
        : []

const filteredArrays = {
    authors: [...new Set(booksFromLocalStorage.map((item) => item.author))],
    categories: [
        ...new Set(booksFromLocalStorage.map((item) => item.category)),
    ],
    publishedDates: [
        ...new Set(
            booksFromLocalStorage.map((item) => item.publishedDate.slice(0, 4)),
        ),
    ].sort(),
}

const { authors, categories, publishedDates } = filteredArrays

const FiltersPanel = () => {
    const { setBooks } = useBook()
    const [selectedOptions, setSelectedOptions] = useState(
        INITIAL_OPTIONS_FILTERS,
    )

    const changeContent = (value: string, name: string) => {
        const property = (KIND_FILTER_PROPERTIES as FilterProperties)[name]
        setBooks(
            value === 'Without filter'
                ? booksFromLocalStorage
                : booksFromLocalStorage.filter((item) => {
                      return property === 'publishedDate'
                          ? item[property].includes(value)
                          : item[property] === value
                  }),
        )
        setSelectedOptions({
            ...INITIAL_OPTIONS_FILTERS,
            [name]: value,
        })
    }

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const { name, value } = event.target
        setSelectedOptions({
            ...selectedOptions,
            [name]: value,
        })
        changeContent(value, name)
    }

    return (
        <div>
            {TITLE_SELECTS_OF_FILTER.map((select) => (
                <select
                    key={select}
                    name={select}
                    onChange={(event) => handleSelectChange(event)}
                    className={styles.select}
                    value={selectedOptions[select]}
                >
                    <option value="Without filter">
                        {select === 'authorsBooks'
                            ? 'Фильтр по автору'
                            : select === 'publishedDateBooks'
                            ? 'Фильтр по дате публикации'
                            : 'Фильтр по категории'}
                    </option>
                    {(select === 'authorsBooks'
                        ? authors
                        : select === 'publishedDateBooks'
                        ? publishedDates
                        : categories
                    ).map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    )
}

export default FiltersPanel
