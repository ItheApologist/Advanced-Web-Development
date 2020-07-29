# Section 15 Notes

## ES2015

ES, or ECMAScript (European Computer Manufactures Association), is the standardization of JavaScript code and languages internationally to ensure interoperability of Web pages across different Web browsers. 

Since 2015, each year, ES is given small to big updates that add more features and changes to the ES standard. Since the last big change to ES was in 2009, ES2015 is a big update and thus needs to be learned, though every iteration must be learned in order to keep up with the latest standard. 

### const

const is a keyword that is an alternative to the var keyword. The keyword allows us to create constants or values which can not be redeclared later in our code.

Here is an example below of the var keyword being redeclared with another value:

```js
var test = "Testing";
test = "Another Test"; // This will change the value of test from Testing to Another Test
test; // Will return Another Test
```

With const, we cannot achieve the same outcome:

```js
const test = "Testing";
test = "Another Test"; // This will return a TypeError due to the variable being declared with const. It cannot be changed.
const test = "Another Test"; // This will return a SyntaxError due to the variable being declared with a const.
```

As you can see above, even when we use the const keyword again to try and redeclare the variable, this simply returns an error.

The only exception is with arrays and objects. Those types of values can still be modified, even with the const declaration.

### let

let is a keyword that allows us to create a variable that can be reassigned, but not redeclared. 

The keyword creates a brand new scope called the block scope. This scope is relative to keywords used in JavaScript. These keywords include if, for, while, do, try, and catch.

Example:

```js
var instructor = "Elie";

if (instructor === "Elie") {
    let funFact = "Plays the cello";
};

funFact; // Will return a ReferenceError
```

As you can see in the above example, we use the let keyword to declare a new variable funFact inside of an if statement. This means that the funFact variable is only available inside of this block. When we try to reference it outside that block, we are returned a ReferenceError.

One thing to note about let is that inside of a function, it's behavior as a variable declaration changes.

Variables declared inside of a function experience something known as hoisting, meaning that no matter where a variable is declared inside of a function, that variable is hoisted to the beginning of the function to exist. 

This does not mean that any values assigned to the variable are added, just that the variable is declared and exist at the beginning of the function no matter what.

What that means is that if you return a variable before a value is assigned inside of a function, it will return as undefined and not a ReferenceError. See below:

```js
function helloInstructor() {
    // var elie exist at the beginning due to hoisting inside of functions.
    return elie;
    var elie = "ME!";
};

helloInstructor(); // Returns undefined
```

With let, while the variable is hoisted, there is no access to the value. It exist in what is known as a TDZ (Temporal Dead Zone).

Given the same example but using let to declare the keyword, the same action happens but the variable is not yet accessible. Therefor, you would get a ReferenceError instead when trying to run that function.

A rule of thumb is to replace var with let whenever working with those block-scope creating keywords.