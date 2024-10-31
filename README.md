# 2024 10 29 JavaScript - Arrays, Loops and Functions

 <details open>
 <summary>Table of content</summary>

- [Arrays](#arrays)
  - [Creating Arrays](#creating-arrays)
  - [Accessing elements in Arrays](#accessing-elements-in-arrays)
  - [Modifying elements in Arrays](#modifying-elements-in-arrays)
  - [Properties of Arrays](#properties-of-arrays)
  - [Static Methods](#static-methods)
  - [Array Methods](#array-methods)
- [Loops](#loops)
  - [While](#while-loop)
  - [Do-while](#do-while-loop)
  - [For-loop](#for-loop-with-index)
  - [For..of](#forof-loop)
  - [For..in](#forin-loop)
- [Functions](#functions)
  - [Create Functions](#create-functions)
  - [Parameters](#functions-with-parameters)
  - [Return Value](#functions-with-return-value)
  - [Parameters and return value](#functions-with-return-value)
  </details>

## Arrays

An arrays is just a collection of data. And we can see it as a list of one or more items. The proper terms are and array of a different amount of elements.

In order to have an array you need square brackets `[ ]`, and inside those we have items, or elements that are seperated with a comma. It can look like this:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

The above is an array of numbers. We can also have an array of strings.

```js
["Niklas", "Henrik", "Erik", "Sofia"];
```

Since we are using JS, we can mix the types inside an array. This would be prohiobited in other languages as Java or C#.

```js
[3, 10, 46, "Niklas", true, 24, "Erik"];
```

Even if this is alright, mixing data types inside the array, you really shouldn't do that because it's bad practise. Keep the clean, only one data type per array. The array itself can have multiple elements, but they should all be of the same type.

The purpose of an array is the collect larger amounts of data at handle it as one entity. Take the name arrays for instance, instead of creating four variables that must be handled one by one, we can have just one array instead that we handle. Makes it easier and let's us handle bigger amount of data in an easy way.

Down below is a very good link to som documentations on arrays.

[Array docs on mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

### Creating Arrays

To create an array, just create a variable and assign it to an array.

```js
const numbers = [46, 34, 10, 77];
```

When we create an array like this, the address, _(reference)_ is saved to the variable. And by address i mean the address to the place on the hard drive where the content of the array is saved. This reference is a so-called pointer.

Passed-by-reference is something that relates to this.

### Accessing elements in Arrays

There are two ways to acces elements in an array. The first one, and the most common is to acces it by index. Each element in an arrays is given an index position and this position count always starts from zero. An array is zero-index-based. In order to access the first element in the array, we access the element on index position 0, the second one on index poistion 1 and so on.

SO to access an element, we just reference the variable that points to the array, and access it with an index with the help of square brackets. `[ ]`.

Accessing first element of array:

```js
const numbers = [46, 34, 10, 77];

console.log(numbers[0]); // 46
```

The third element:

```js
console.log(numbers[2]); // 10
```

The second way of accessing an element in an array is to use an array method called `at()`

Same example, access the first element:

```js
const colors = ["Red", "Green", "Blue", "Orange"];

console.log(colors.at(0)); // Red
```

The nice thing about the `at()` method is that it accepts negative values, and if you give it a negative value, it will start "counting" from the end of the array. So -1 would be the last element in the array. This is similar to the way python works. Just FYI.

```js
console.log(colors.at(-1)); // Orange
```

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

### Modifying elements in Arrays

In order to edit an element we need to know its index position and the we can just use square bracket in order to access it and modify it. We modify it by assigning a new value to it.

```js
const colors = ["Red", "Green", "Blue", "Orange"];
colors[0] = "Yellow";
console.log(colors);

colors[2] = "Brown";
console.log(colors);
```

We can also update an element of an array with `with()`. The difference here is that this method takes two parameters. The first one is the index position of the element we want to change. The second one is the new value that we would like to give that element. Then a copy of array is returned to us with the modifications.

```js
const colors = ["Red", "Green", "Blue", "Orange"];

const updatedColors = colors.with(1, "pink");

console.log(colors);
console.log(updatedColors);
```

### Properties of Arrays

Properites are just fixed values, in our case the property we are interested in is the `.length`-property. This property gives us the length, as a number, of the array to us. If we have five elements in an array, the value of lenght will be 5.

```js
const colors = ["Red", "Green", "Blue", "Orange"];

const length = colors.length; // Here we just save the value to a variable. We don't have to do this.

console.log(length); // 4
console.log(colors.length); // 4
```

So if we add or remove elements of the array, this value will updated accordingly.

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

### Static Methods

Let's skip this for now. I will add content here later.

### Array Methods

A method is just a set of instructions that are predfined and bundle inside a method. These instructions are usually very common and instead of us writing the same code over and over, JS has created these methods for us to use whenever we want to.

#### push(item1, item2, item...) => new lenght of array

Is used to add an element to the end of an existing array. It takes one or more parameters, and theses parameters are the new elements to be added. It also returns something, and that something is the new lenght of the array.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Let's push a 9 to the end.
numbers.push(9);

// Let's push 10 and 11
numbers.push(10, 11);

// push 12 and save the new lenght in a variable
const newLength = numbers.push(12);
console.log(newLength); // 12
```

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

#### pop( ) => the removed element

Is used to remove the last element of an array. The element that was removed is also returned by the method.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

// Remove the last element and ignore the return value.
cities.pop();
console.log(cities);
```

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

#### unshift(item1, item2, item..) => new lenght of array

Is used to add an element to the beginning of the array instead of the end. It also returs the new length of the array as a number.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

cities.unshift("Linköping");
console.log(cities);
```

#### shift() => the removed element

Is used to remove an element from the beginning of an array and returns that removed element.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

cities.shift();
console.log(cities); //["Göteborg", "Malmö", "Lund"];
```

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

#### includes(item) => boolean

Is used to check of an item/element exists in a array or not. The parameter is the item/element we are looking for and the return value either true or false.

```js
const numbers = [2, 4, 6, 8, 10];

if (numbers.includes(6)) {
  console.log("The number 6 exists in the array");
} else {
  console.log("There is no number 6 in the array");
}

const number8Exists = numbers.include(8);

if (number8Exists) {
  // Do something if the number 8 exists.
}
```

If you have more complex conditions in your if checks, always try to store them in variabels with readable names instead. It makes the code more readably and maintainable.

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

#### indexOf(item) => the index position OR -1 if it doesn't exist.

Is used to find an index position of a specific item/element inside the array. If it exists, the index is returned as a number, and if it doesn't, negative one `-1` is returned. Keep that in mind when using it in if checks.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

const indexOfMalmo = cities.indexOf("Malmö");
console.log(cities);
console.log(indexOfMalmo);
```

If we try get an index of an item that doesn't exist, will get back `-1`.

```js
const indexOfSkurup = cities.indexOf("Skurup");
console.log(indexOfSkurup); // -1
```

Remember, if you use this in if check, check for `-1` if you want to do something it the item doesn't exist in the array.

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

#### join(separator?) => a string including all the elements

Is used to convert and array of elements to a string containing those elements. It doesn't matter if it's numbers, strings or something else, the method always tries to convert everything to a long string. It also takes a parameter that is a character that will be used to separate the elements with. Can be an empty space, dash, underscore or any other character. The separator is optional, hence the question mark in in the syntax.

Consider this example:

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

const citiesAsString = cities.join();
```

If we don't specify a seperator, per default every element will be separated with a comma.

```js
console.log(citiesAsString); // "Stockholm,Göteborg,Malmö,Lund"
```

This is alright, but maybe we want an empty space instead between the elements.

```js
const citiesAsString = cities.join(" ");
console.log(citiesAsString); // "Stockholm Göteborg Malmö Lund"
```

In short, join converts an array to a string and separates every element with a separator, that is defined in the parameter.

Or to understand it my name: We **join** the elements in an array to a string.

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

#### splice(start, deleteCount, item1?, item2?, item?...) => an array of the removed elements

The splice method lets us modify the content of an array on any given index position.

It takes several parameters. The first one is the index on which we would like to start our modification.

The next one is the delete count, how many elements do we want to delete? If we don't want to delete anything, we just assign 0 to this parameter. If we delete something, it will start deleting from the `start` parameters, in other words, the index position we assign to `start`.

The third one (or more) is the new items/elements we would like to add to the array.

The return value of the method is a new array containing the removed elements. If no elements were removed, the return value is an empty array.

Let's do an example:

```js
const countries = ["Sweden", "Denmark", "Finland", "Norway", "Iceland"];
```

First thing, let's remove Denmark from the array.

```js
countries.splice(1, 1);
console.log(countries); // ["Sweden", "Finland", "Norway", "Iceland"];
```

If we want to remove more elements, that can work as well, but they have to be next to each other. Let's say we want to remove Norway and Iceland from the array.

```js
const countries = ["Sweden", "Denmark", "Finland", "Norway", "Iceland"];

countries.splice(3, 2);
console.log(countries); // ['Sweden', 'Denmark', 'Finland']
```

Another usage is when we want to replace an element inside the array with another. First we need the index position on where to start the replacement, then define how many to remove, in our case 1 if we just want to replace. And then we need to specify the item/element to add.

Let's replace Norway with Germany:

```js
const countries = ["Sweden", "Denmark", "Finland", "Norway", "Iceland"];

countries.splice(3, 1, "Germany");

console.log(countries); //["Sweden", "Denmark", "Finland", "Germany", "Iceland"];
```

So if we add elements inside the array, the additions always starts from the index position defined as the "start"-parameter. That means all elements that come after, they will just be shifted to the "right", they get new index positions.

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

#### slice()

We will cover this later maybe.

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

## Loops

### While Loop

The while loop is useful when you don’t know the exact number of times you need to repeat an action in advance. It continues looping as long as a given condition remains true.

Syntax:

```js
while (condition) {
  // Code to run each iteration
}
```

Let's do a counter. Let's increment the variabel `count` till it gets to 100. Then we break the loop.

```js
let count = 0;

while (count < 100) {
  count++;
  // count = count + 1; // This is equal to above
  console.log(count);
}

console.log(`The count is now ${count} after the loop canceled.`);
```

In conclusion, the while loop runs until the condition is evaluated as false. So be careful to specify conditions that will never be false.

We can cancel the loop manually as well by using the `break` keyword. It goes like this:

```js
let count = 0;

while (count < 100) {
  count++;
  // count = count + 1; // This is equal to above
  console.log(count);

  if (count === 47) {
    console.log("The count is now 47 and that's enough!");
    break;
  }
}

console.log(`The count is now ${count} after the loop canceled.`);
```

Remember, the while loop always checks the condition BEFORE it runs its first iteration. If the condition is false, the loop will be ignored!

[Back to top](#2024-10-29-javascript---arrays-loops-and-functions)

### Do-while Loop

The do-while loop is similar to while, but it always runs at least once because it checks the condition after running the loop body.

Syntax:

```js
do {
  // Code to be run each iteration
} while (condition);
```

Let's do the same example with the count, but set the condition to `count !== 0`. This means the condition is false straight away but since it's a do-while, it will run atleast once and update the value so it's not 0 anymore.

```js
let count = 0;

do {
  count++;
  console.log(count);
} while (count !== 0);
```

### For-loop with index

The classic for loop is often used when you know in advance how many times you want to repeat an action, especially when working with lists or arrays.

Syntax:

```js
for (initialValue; condition; change) {
  // Code to be executed in each iteration.
}
```

Let's take an example with an arrys of numbers. We just want to console.log each item/element inside the array.

```js
const numbers = [5, 2, 10, 15, 27, 99];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

The `initialValue` is the value of the index we will start looping on. In the case above, we start looping on index position 0, in other words, the first item/element in the array.

The `condition` in this case is the `length` attribute of the array. It will always be equal to the numbers of items/elements in the array. It's good to use value instead of hard coding one, since we might not know how many items/elements there are inside the array.

The `change` is just how we update the index value after each iteration. Usually we just increment it but we can do it in other ways as well.

Let's try the opposite of the example, instead of going left to right, we can go right to left.

```js
const numbers = [5, 2, 10, 15, 27, 99];

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
```

The reason for the `-1` inside the initialValue is because the length attribute just counts the total amount of items/elements. Which means that the length value will always be one more than the total number of index positions, since index position starts at 0.

### For..of-loop

The for-of loop is specifically for iterating over items in an iterable object (like an array). It’s useful when you only need each item, not the index.

Syntax:

```js
for (variabel of array) {
  // Code to be executed in each interation
}
```

Example with car names, just log the car to the console.

```js
const cars = ["Volvo", "Saab", "Volkswagen", "BMW"];

for (const car of cars) {
  console.log(car);
}
```

The `variable` is a local variable that is created and re-created in each iteration and always has the value of the element that is being iterated over.

### For..in-loop

The for-in loop is useful for iterating over keys (or properties) in an object. It’s not generally used for arrays (as it returns indexes as strings), but it’s great for objects.

## Functions

A function is basically a small (or larger) piece of code that has been packaged to a entity that can be reused across your application as many times as you would like.

### Create functions

There are three "ways" to create functions in JS. Two of them are kind of similar but one of them is more different.

#### with the function keyword

```js
function functionName(/* zero or more params */) {
  // The code to be executed.

  // zero or ONE return value
  return something;
}
```

Let's try a greeting function

```js
function greeting() {
  console.log("Hello there!");
}
```

A breakdown:

- `function`: reserved keyword in JS, used to tell JS that a function is to be defined.

- `functionName`: just the name of the function, pick a name that describes the function.

- `parameters`: also called "arguments" sometimes, they are the data that the function needs in order to work. We can define zero or more of those.

- `return value`: the values that is being returned from the fuction. You don't have to have a return value, it's totally fine for the functions to just run some code. But remember, you can only have ONE return value. If we don't defined a return value, the browser will do that for us and return `undefined`.

#### with a variabel and the function key word.

```js
const functionName = function (/* zero or more params */) {
  // The code to be executed.

  // zero or ONE return value
  return something;
};
```

Same example as above:

```js
const greeting = function () {
  console.log("Hello there!");
};
```

#### with an arrow function

```js
const functionName = (/* zero or more params */) => {
  // The code to be executed.

  // zero or ONE return value
  return something;
};
```

Same example again:

```js
const greeting = () => {
  console.log("Hello there!");
};
```

### Functions with parameters

### Functions with return value

### Function with both
