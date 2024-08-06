'use client'
import React, { useState } from 'react'

import { useBook } from '@app/hooks/useBook'
import { Book } from '@app/types'

import styles from './FiltersPanel.module.css'

enum FilterTypes {
    AUTHORS = 'authorsBooks',
    PUBLISHED_DATES = 'publishedDateBooks',
    CATEGORIES = 'categoriesBooks',
}

const initialOptions = {
    [FilterTypes.AUTHORS]: 'Without filter',
    [FilterTypes.PUBLISHED_DATES]: 'Without filter',
    [FilterTypes.CATEGORIES]: 'Without filter',
}

const selectsNames = [
    FilterTypes.AUTHORS,
    FilterTypes.PUBLISHED_DATES,
    FilterTypes.CATEGORIES,
]

const filters = ['Фильтр по авторам', 'Фильтр по жанру', 'Фильтр по году']

const filterProperties = {
    [FilterTypes.AUTHORS]: 'author',
    [FilterTypes.PUBLISHED_DATES]: 'publishedDate',
    [FilterTypes.CATEGORIES]: 'category',
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
    const [selectedOptions, setSelectedOptions] = useState(initialOptions)

    const changeContent = (value: string, name: string) => {
        setBooks(
            value === 'Without filter'
                ? booksFromLocalStorage
                : booksFromLocalStorage.filter((item) => {
                      const property = filterProperties[name]
                      return property === 'publishedDate'
                          ? item[property].includes(value)
                          : item[property] === value
                  }),
        )
        setSelectedOptions({
            ...initialOptions,
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
            {selectsNames.map((select, index) => (
                <select
                    key={select}
                    name={select}
                    onChange={(event) => handleSelectChange(event)}
                    className={styles.select}
                    value={selectedOptions[select]}
                >
                    <option value="Without filter">{filters[index]}</option>
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
