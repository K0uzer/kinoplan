import { useContext } from 'react'

import { UserContext, ContextUserType } from '@app/context/user'

export const useUser = (): ContextUserType => {
    const context = useContext(UserContext)
    if (context === undefined)
        throw new Error(
            `useUser должен использоваться внутри UserContextProvider`,
        )
    return context
}
