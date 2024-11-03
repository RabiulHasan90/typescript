"use strict";
//normal function
// learning function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => num1 + num2;
// method in object
const adu = {
    ada: 0,
    addBalance(ada) {
        return `thi is ${this.ada + ada}`;
    }
};
const arr = [3, 4, 5];
const newArr = arr.map((elem) => elem * elem);
