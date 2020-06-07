# Section 6 Notes

## Callback Functions

A callback function is a function that is passed into another function as a parameter then invoked by that other function.

An example:

```js

function callback() {
    console.log("Coming from callback");
};

function higherOrder(fn) {
    console.log("About to call callback");
    fn(); // Callback function is invoked
    console.log("Callback has been invoked");
};

higherOrder(callback);
```

In the above example, the function callback is passed into the higherOrder function, resulting in a callback function by definition.

## Higher Order Function

A higher order function is a function that accepts a callback as a parameter.

In the example shown in the Callback Functions section, we can see the higherOrder function fits this definition by allowing for allowing a callback function.

## ForEach Function

Only can be used for array items. It eliminates the need to write a for loop by writing it for us. 

Here is an example below of a normal for loop:

```js
var arr = [1,2,3,4,5,6];
function double(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
double(arr);
```

Now here is the same example written with a forEach:

```js
 var arr = [1,2,3,4,5,6];
 forEach(arr, function(number) {
     console.log(number * 2);
 });
 ```

As you can see, the forEach uses much less code.

Here is the forEach function definition:

```js
function forEach(array, callback) {
  // To be implemented
}
```
and here is it's callback function definition:

```js
// Callback signature
function callback(curElement, currentIndex, array) {
  // Implemented by the caller of forEach
}
```

You can see that the callback has three parameters. Most of the time only the first is used. However, all three can be if necessary.

## Find Index

Returns the index of the first element in a given array for which the callback returns a truthy value. -1 is returned if the callback never returns a truthy value.

findIndex function definition:

```js
function findIndex(array, callback) {
  // findIndex code to be implemented
}
```

callback function definition:

```js
function callback(curElement, curIndex, array) {
  // callback implemented by caller of function
}
```

Example:

```js
var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array) {
  return num === 6;
});
```

The above example returns the index when num is equal to 6, which is 2.

## The Stack and The Heap

The stack is an ordered data structure that keeps track of functions invoked. The user doesn't have access to the stack, it is managed by the JavaScrip runtime.

Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top). When a function is returned, the information about the invocation is taken off the top of the stack (popped off of the top).

Example: 

```js
function multiply(x, y) {
    return x * y;
}

var res = multiply(3,5)
```

If we follow the code above, multiply is invoked on line 121, causing the main function to be added to the stack. Then, the code jumps to the line that contains the code for that function, line 117. That function is added to the top of the stack to run. Once it is returned on line 118, the multiply function is removed from the top of the stack. Finally, the returned value is returned to the main function, causing that to be removed from the stack.

The Heap is the area in memory where your data is stored. So created variables are stored in memory and referenced when needed.

## Set timeout and Set Interval

setTimeout is a function that asynchronously invokes a callback after a delay in milliseconds. 

Example: 

```js
// setTimeout usage
function callback() {
  console.log("callback function");
}
var delay = 1000;  // Delay is in ms
setTimeout(callback, delay);
```

The above example will delay the callback for 1000 ms. You can also use just the value instead of setting a number to a variable.

You can also cancel a set timeout with the clearTimeout function.

setInterval is a function that continually invokes a callback after every X milliseconds, where X is provided to setInterval.

Example:

```js
 // setInterval usage
 function callback() {
   console.log("callback is called continuously");
 }
 var repeat = 3000;
 setInterval(callback, repeat);
 ```

 The above example will repeat the code every 3000ms.

 Just like with setTimout, you can cancel setInterval with the clearInterval function.

 ## Event Loop and the Queue

 The queue is an ordered list of functions waiting to be placed on the stack. Functions in the queue are processed on a first in, first out basis (FIFO).

 The event loop is functionality in the JavaScript runtime that checks the queue when the stack is empty. If the stack is empty, the front of the queue is placed in the stack.

 Javascript is a single threaded language, meaning that code is executed linearly. code that is running cannot be interrupted by something else going on in the program.

 ## Promise Basics

 A promise is an object that represents a task that will be completed in the future.

 Example:

 ```js
 var p1 = new Promise(function(resolve, reject) {
   var num = Math.random();
   if (num < 0.5) {
     resolve(num);
   } else {
     reject(num);
   }
 });

 p1.then(function(result) {
   console.log("Success:", result);
 }).catch(function(error) {
   console.log("Error:", error);
 });
```

All Promises have a resolve and a reject. In the above example, a random number is generated. If it is less then .5, it resolves. Otherwise, it is rejected. The p1.then processes the resolve while the p1.catch resolves the reject.

## Promise Chaining