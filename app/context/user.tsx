'use client'

import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from 'react'

export type ContextUserType = {
    isAuthorized: boolean
    setIsAuthorized: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<ContextUserType>({
    isAuthorized: false,
    setIsAuthorized: () => {},
})

const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false)
    const value: ContextUserType = useMemo(
        () => ({
            isAuthorized,
            setIsAuthorized,
        }),
        [isAuthorized, setIsAuthorized],
    )
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider
