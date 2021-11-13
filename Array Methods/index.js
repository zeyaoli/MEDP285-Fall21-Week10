// Use map to call a function on each item in the array

const numbers = [3, 10, 25, 78, 123];
const doubleNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log(doubleNumbers);

// Renders a list of items in array

const todos = [
    "homework",
    "housework",
    "readings",
    "final project idea",
    "quiz",
];
const list = todos.map((todo) => {
    return `<li>${todo}</li>`;
});
console.log(list);

// Array.join() function joins all array elements into a string
const todoJoin = todos.join(" and ");
console.log(todoJoin);

const listHTML = `<div><ul>${list.join("")}</ul></div>`;
console.log(listHTML);

const container = document.querySelector("#container");
container.innerHTML = listHTML;

// Array.filter() creates a new array with the elements that meet the condition
// It will come in handy when we deal with data later
const anotherNumbersArray = [12, 5, 8, 44, 95];
const biggerThanTen = anotherNumbersArray.filter((number) => {
    return number > 10;
});
console.log(biggerThanTen);

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);

// Use Array.splice() to remove elements
const fruits = ["apple", "banana", "orange", "mango"];
// the first parameter defines the position (index) of where we are going to remove
// the second parameter defines how many items/elements we are going to remove from that position
fruits.splice(1, 2);
console.log(fruits);
