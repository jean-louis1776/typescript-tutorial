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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// ENUMS
var ResourseType;
(function (ResourseType) {
    ResourseType[ResourseType["BOOK"] = 0] = "BOOK";
    ResourseType[ResourseType["AUTHOR"] = 1] = "AUTHOR";
    ResourseType[ResourseType["FILM"] = 2] = "FILM";
    ResourseType[ResourseType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourseType[ResourseType["PERSON"] = 4] = "PERSON";
})(ResourseType || (ResourseType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourseType.BOOK,
    data: { title: "name of the wind" },
};
const docTwo = {
    uid: 10,
    resourceType: ResourseType.PERSON,
    data: { name: "Yoshi" },
};
console.log(docOne, docTwo);
