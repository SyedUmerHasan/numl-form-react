
export let assertions = {
    alphanumeric: (val) => {
        return typeof val === 'string' && val.match(/^[a-z\d]*$/i)
    },
    alphabets: (val) => {
        return typeof val === 'string' && val.match(/^[a-z]*$/i)
    },
    nospaces: (val) => {
        return typeof val === 'string' && val.match(/^[a-zA-Z0-9]*$/i)
    },
    specialcharacters: (val) => {
        return typeof val === 'string' && val.match(/^[a-zA-Z0-9]*$/i)
    },
    number: (val) => {
        return typeof val === 'string' && val.match(/^[0-9]*$/i)
    },
    url: (val) => {
        return typeof val === 'string' && val.match(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/i)
    },
}