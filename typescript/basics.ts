let age: number;

age = 12;

let userName: string = 'Dalila';

let isInstructor: boolean = false;

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// let person: {
//   name: string;
//   age: number;
// };

// person = {
//   name: 'Dalila',
//   age: 18,
// };

// let people: {
//   name: string;
//   age: number;
// }[];

// people = [
//   { name: 'Alisa', age: 24 },
//   { name: 'Irma', age: 12 },
// ];

// Type inference

// let course = 'React-course';

// course = 123;

let course: string | number = 'React-course';

let names: string | string[];

// Type Aliases

type Person = {
  name: string;
  age: number;
};

let person: Person;

let people: Person[];

// Function and types

function add(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

// function insertAtBeginning(array: any[], value: any) {
//   const newArr = [value, ...array];

//   return newArr;
// }

function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];

  return newArr;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(
  ['a', 'b', 'c', 'd'],
  'e'
);
