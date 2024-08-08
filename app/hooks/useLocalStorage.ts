export type JSONValue =
    | string
    | number
    | boolean
    | { [key: string]: JSONValue }
    | JSONValue[]

export const useLocalStorage = () => {
    const getLocalStorage = (key: string) => {
        return JSON.parse(localStorage.getItem(key) as string)
    }

    const changeLocalStorage = (key: string, content: unknown) => {
        return localStorage.setItem(key, JSON.stringify(content))
    }

    return {
        getLocalStorage,
        changeLocalStorage,
    }
}
