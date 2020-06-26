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