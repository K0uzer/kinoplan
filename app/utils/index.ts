export const reloadPage = () => window.location.reload()

export const changePage = (path: string) => (window.location.href = path)

export const getCookie = () => {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=')
        acc[name] = value
        return acc
    }, {})
}
