export function getBaseUrl(url) {
    if (typeof url === 'string') {
        const splitUrl = url.split('/')
        return splitUrl[2]
    }
    return ''
}