// Explicit types
let character: string
let age: number
let isLoggedIn: boolean

// age = 'Luigi'
age = 30

// isLoggedIn = 25
isLoggedIn = false

// Arrays
let ninjas: string[] = []
ninjas.push("Shaun")

// Union types
let mixed: (string | number | boolean)[] = []
mixed.push("hello")
mixed.push(20)
mixed.push(false)
console.log(mixed)

let uid: string | number
uid = "123"
uid = 123

// Objects
let ninjaOne: object
ninjaOne = { name: "Yoshi", age: 30 }

let ninjaTwo: {
    name: string
    age: number
    beltColor: string
}

ninjaTwo = {
    name: "Mario",
    age: 20,
    beltColor: "black",
}
