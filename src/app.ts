// Classes
class Invoice {
    // readonly client: string
    // private details: string
    // public amount: number

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice("Mario", "work on the Mario website", 250)
const invTwo = new Invoice("Luigi", "work on the Luigi website", 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector(".new-item-form") as HTMLFormElement

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})
