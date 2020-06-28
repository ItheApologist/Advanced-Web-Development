# Section 11 Notes

## Closures

Closures are functions that make use of variables defined in outer functions that have previously returned.

Example:

```js

function outer() {
    var start = "Closures are"
    return function inner() {
        return start + " " + "awsome"
    }
}
```

In the above example, we define an outer function that defines a variable called start. Then, we return an another function called inner. Inside the inner function, we are returning the start variable defined in the function outside of it along with some other values. This concept of returning a value defined in an outer function within an inner function is a closure.

Some items to note:
* We have to 'return' the inner function for this to work.
* We can call the inner function right away by using an extra () or store it in a variable. 
* Our inner function can be anonymous.

### Private Variables

In other programming lanuanges, private varialbes are variables that cannot be modified externally in scope relative to the varialbe. In Javascript, private variables are not built in, so we use closures to simulate that.

### Imutablity

In object-oriented programming, we need to make sure that our objects cannot be minipulated from the outside, which is still possible when working with closures. 

Take this example:

```js
function classRoom() {
    var instructors = [ "Elie", "Colt"];
    return {
        getInstructors: function() {
            return instructors;
        },
        addInstructors: function(instructor) {
            instructors.push(instructor);
            return instructors;
        }
    }
}
```

We have to closures that both return the list of the instructors and add instructors to that list. However, if we define a variable equal to the outer function, then call that varible with the getInstructors method with the pop method added, we can remove people from the array that would affect other variables equal to the same outer function, which is the opposite of what we intend to achieve with closures. 

To fix this, instead of returning the original instructors array, we can add the slice method to the end in each closure so that we return a copy of the array, thus preventing it from outside manipulation.

## this

this is a reserved keyword. It's value is determined by how a function is called, known as the execution context. That context is determined by the functions scope (global, object/implicit, explicit, new).

### Global Context

When 'this' is not inside of a declared object. 

Example:

```js
console.log(this); // returns window
```

In the above example, since this is used inside console.log, which is not inside any declared function, the context of 'this' is global and will return window, since the window