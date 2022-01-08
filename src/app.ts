import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

const form = document.querySelector(".new-item-form") as HTMLFormElement

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

// List template instance
const ul = document.querySelector("ul")!
const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter
    if (type.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, "end")
})

// TUPLES
let arr = ["Ryu", 25, true]
arr[0] = false
arr[1] = "Yoshi"
arr = [30, false, "Yoshi"]

let tup: [string, number, boolean] = ["Ryu", 25, true]
tup[0] = "Ken"
tup[1] = 30

// let student: [string, number]
// student = [324234, "Ken"]
// student = ["Chun-li", 2323213]
