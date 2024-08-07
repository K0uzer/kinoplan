export const useLocalStorage = () => {
    const getLocalStorage = (key: string) => {
        return JSON.parse(localStorage.getItem(key) as string)
    }

    const changeLocalStorage = (key: string, content: any) => {
        return localStorage.setItem(key, JSON.stringify(content))
    }

    return {
        getLocalStorage,
        changeLocalStorage,
    }
}
