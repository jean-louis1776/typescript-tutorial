let age: any = 25
console.log(age)
age = true
console.log(age)
age = "Hello"
console.log(age)
age = { name: "Luigi" }
console.log(age)

let mixed: any[] = []
mixed.push("Mario")
mixed.push(false)
console.log(mixed)

let ninja: { name: any; age: any }
ninja = { name: "Yoshi", age: 25 }
console.log(ninja)
ninja = { name: 25, age: "Yoshi" }
console.log(ninja)
