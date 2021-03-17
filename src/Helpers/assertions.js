export const AssertionsEnum = { 
    "AlphaNumeric": "alphanumeric", 
    "Alphabets": "alphabets", 
    "NoSpaces": "nospaces", 
    "SpecialCharacters": "specialcharacters",
    "Number": "number", 
    "URL": "url", 
}


export let assertions = [
    {
        name: "alphanumeric",
        message: "All characters must be Alphanumeric",
        function: (val) => {
            return typeof val === 'string' && val.match(/^[a-z\d]*$/i)
        }
    },
    {
        name: "alphabets",
        message: "All characters must be Alphabets",
        function: (val) => {
            return typeof val === 'string' && val.match(/^[a-z]*$/i)
        }
    },
    {
        name: "nospaces",
        message: "All characters must not contain special characters or spaces",
        function: (val) => {
            return typeof val === 'string' && val.match(/^[a-zA-Z0-9]*$/i)
        }
    },
    {
        name: "specialcharacters",
        message: "All characters must not contain special characters",
        function: (val) => {
            return typeof val === 'string' && val.match(/^[a-zA-Z0-9]*$/i)
        }
    },
    {
        name: "number",
        message: "All characters must be numeric",
        function: (val) => {
            return typeof val === 'string' && val.match(/^[0-9]*$/i)
        }
    },
    {
        name: "url",
        message: "String must be HTTP/FTP URI",
        function: (val) => {
            return typeof val === 'string' && val.match(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/i)
        }
    },
]