const regexObject = {
    "string" :  /^[a-z A-Z]{0,}$/,
    "number" :  /^[0-9]{0,10}$/,
    "age" :  /^[0-9]{0,3}$/,
}


export const stringValidator = (input : string) => regexObject["string"].test(input)  
export const numberValidator = (input : string) => regexObject["number"].test(input) 
export const ageValidator = (input : string) => regexObject["age"].test(input)