// utils.js

export const add = (val, b) => {
    return val + b
}

export const multiply = (a, b) => a * b;

export const test = (val) => {
    console.log(val);
    //return val
}

export function func1(val) {
    console.log(val);
}

export const func2 = (val) => {
    console.log("func2 value is ", val);
}

export const arrOfValues = {
    name1: "name 1",
    name2: "name 2"
}

export const alterArrayOfValues = (key, value) => {
    arrOfValues[key] = value
}