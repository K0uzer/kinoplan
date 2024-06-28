import { useContext } from 'react'

import { BookContext, ContextBookType } from '@app/context/book'

export const useBook = (): ContextBookType => {
    const context = useContext(BookContext)
    if (context === undefined)
        throw new Error(
            `useBookClub должен использоваться внутри BookClubContextProvider`,
        )
    return context
}
