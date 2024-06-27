import { useContext } from 'react'

import { BookContext, ContextBookType } from '@app/context/book'

export const useBook = (): ContextBookType => {
    const context = useContext(BookContext)
    if (context === undefined) throw new Error(`Context Error (undefined)`)
    return context
}
