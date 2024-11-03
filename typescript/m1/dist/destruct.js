"use strict";
//destructuring
//object destructure
const addr = {
    namee: "haan",
    ars: {
        k: "nae",
        m: "no"
    },
    bari: "himcung",
};
const { namee, ars: { k } } = addr;
// array destr
const bf = ["hasan", "kamal", "naman", "jaan", "pakhi"];
const [, , naman, ...rest] = bf; //rest -> naman er por sobgula
