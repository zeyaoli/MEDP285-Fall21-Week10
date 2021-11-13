/* Object */

// Construct an object
const person = {
    // property : value
    first: "Zeyao",
    last: "Li",
    age: 25,
    students: ["erik", "ashley", "jared", "henry"],
};
// typeof person
// Order doesn't matter in object

// Access the value - we are using dot notation
console.log(person.first);
console.log(person.age);
console.log(person.students);

// Using const with object

const score = { visitors: 0, home: 0 };
// This is ok
score.visitors = 1;
// this is not
// score = {visitors: 1, home: 1};
