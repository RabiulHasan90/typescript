"use strict";
{
    const genericFunc = (num2) => {
        return [num2];
    };
    const res1 = genericFunc(4);
    console.log(res1);
    const genericFuncs = (num2, num1) => {
        return [num2, num1];
    };
    const res2 = genericFuncs(4, 'acha');
    console.log(res2);
    const addCorses = (student) => {
        const corse = "next level ";
        return Object.assign({ corse }, student);
        const add = addCorses({ name: "hasan", roll: 32 });
    };
}
