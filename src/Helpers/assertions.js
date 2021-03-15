export let assertions = [
    {
        name : "alphanumeric",
        message : "All characters must be Alphanumeric",
        function : (val) => {
            return typeof val === 'string' && val.match(/^[a-z][a-z\d]*$/i)
        }
    },
    {
        name : "alphabets",
        message : "All characters must be Alphabets",
        function : (val) => {
            return typeof val === 'string' && val.match(/^[a-z]*$/i)
        }
    }
]