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

    let doc: HasFormatter
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, "end")
})

// ENUMS
enum ResourseType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
}

interface Resource<T> {
    uid: number
    resourceType: ResourseType
    data: T
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourseType.BOOK,
    data: { title: "name of the wind" },
}
const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourseType.PERSON,
    data: { name: "Yoshi" },
}

console.log(docOne, docTwo)
