import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// TUPLES
let arr = ["Ryu", 25, true];
arr[0] = false;
arr[1] = "Yoshi";
arr = [30, false, "Yoshi"];
let tup = ["Ryu", 25, true];
tup[0] = "Ken";
tup[1] = 30;
// let student: [string, number]
// student = [324234, "Ken"]
// student = ["Chun-li", 2323213]
