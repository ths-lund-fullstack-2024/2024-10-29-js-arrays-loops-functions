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

### Modifying elements in Arrays

index, with

### Properties of Arrays

### Static Methods

### Array Methods

push, pop, unshift, shift, includes, indexOf, join, splice, slice

## Loops

### While Loop

### Do-while Loop

### For-loop with index

### For..of-loop

### For..in-loop

## Functions

### Create functions

### Functions with parameters

### Functions with return value

### Function with both
