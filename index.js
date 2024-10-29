// ########## Creating an array ########## //
// const numbers = [46, 34, 10, 77];
// console.log(numbers[10]);

// ########## Accessing an array ########## //

// const Red = "Red";

// const colors = [Red, "Green", "Blue", "Orange"];
// console.log(colors.at(2));

// console.log(colors.at(-3));

// ########## Modifying an array ########## //

// const colors = ["Red", "Green", "Blue", "Orange"];
// colors[0] = "Yellow";
// console.log(colors);
// colors[2] = "Brown";
// console.log(colors);

// const colors = ["Red", "Green", "Blue", "Orange"];
// const updatedColors = colors.with(1, "Pink");

// console.log(colors);
// console.log(updatedColors);

// const colors = ["Red", "Green", "Blue", "Orange"];

// ########## Properties of an array ########## //

// const colors = ["Red", "Green", "Blue", "Orange", "Yellow"];
// const length = colors.length;
// console.log(length); // 4

// ########## push() ########## //

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // Let's push a 9 to the end.
// numbers.push(9);

// // Let's push 10 and 11
// numbers.push(10, 11);

// ########## pop() ########## //

// const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

// // Remove the last element
// cities.pop();
// console.log(cities);

// ########## unshift() ########## //

const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

cities.unshift("Linköping");
console.log(cities);
