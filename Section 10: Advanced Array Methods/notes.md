# Section 10 Notes

## forEach

forEach can only be invoked on an array. forEach loops through the array and runs a callback function on each value in the array. When the loop ends, forEach returns undefined. It is in the callback function that we can obtain the values, indexes, and array of the forEach.

Example:

```js
var arr = [1,2,3];

arr.forEach(function(value, index, array) {
    console.log(value);
});
```

In the above example, a variable called arr is given an array value [1,2,3]. Then, forEach is called on it, and the callback function is given it's three parameters, value, index, array. Finally, in the callback function, we console.log the value. This will loop through each value and log it in the console.

## map

map is an array method that allows you to quickly add new key-value pairs to an already existing array.

When map is invoked, it creates a new array. It iterates over the old array, running a callback function on each value in the array. When complete, it returns the new array.

Example:

```js
function tripleValues(arr) {
    arr.map(function(value) {
        return value * 3;
    });
};

tripleValues([1,2,3])
```

In the above example, an array is passed into the tripleValues function. Then, the map method is called on the array with a callback function taking in the values. Each value is looped over, multiplied by three, then added to the new array.

## filter

filter is an array method that works like map, but instead, the callback function returns a boolean value that will determine if the passed in value is added to the new array.

Example:

```js
var arr = [1,2,3];

arr.filter(function(value, index, array) {
    return value > 2;
});
```

In the above example, we run the filter method on the array. Then, we simply write a return statement with the logic that only if the value is greater then two. Since 3 is the only number greater than two, three is the only value passed into the new array.

As you can see, we didn't need to write anything to declare the new array nor write an if statement to process the logic for the boolean. We simply write the return statement with the boolean logic in that statement.

## some

some is an array method that runs a function on each value in an array. If the callback function returns true for any value, then a boolean value of true is returned for the function. Thus, if none of the callback function returns true for any value, then false is returned.

Note that this method is unlike the others in that no new array is created. Only a boolean value of true or false is returned.

Example:

```js
var arr = [1,2,3];

arr.some(function(value, index, array) {
    return value < 2;
});
```

In the above example, we run the some method against the array we have created. some runs the callback function which checks to see if any value in the array has a value less then two. Since it does, we are returned the boolean value of true.

## every

every is like some, except it checks to see if any value returns false. If so, it returns false. Otherwise, if every value returns true, then true is returned. 

Example:

```js
var arr = [-1, -2, -3];

arr.every(function(value, index, array) {
    return value < 0
});
```

In the above example, the every method is run against the array we have created. The callback function checks to see if all values are less then 0. Since all the values in the array are negative, they all evaluate as true, and therefore, the function returns true.

## reduce

reduce allows you to sum up the values of data within an array and additionally add another starting value as a second parameter. If no declared starting value is made, then the accumulator's starting value is the first value in the array. 

Example:

```js
var arr = [1,2,3,4,5];

arr.reduce(function(accumulator, nextValue) {
    return accumulator + nextValue
});
```

In the above example, the reduce method is run against the array we have created. Since we don't define a starting accumulator value, the first accumulator value is 1, with the nextValue being 2. We return the accumulator value pluse the nextValue, so one + two, which is three. Three becomes the new accumulator value, the the nextValue becomes four, which are added together and so forth until we return the last value of 15.

We can do the same thing for strings:

```js
var names = ['Tim', 'Matt', 'Colt', 'Elie']

names.reduce(function(accumulator, nextValue) {
    return accumulator += ' ' + nextValue;
}, 'The instructors are');
```

In the above example, the reduce method is run against our array of names. In the callback function, we are adding a space and the nextValue to each accumulator. Because we specified a starting accumulator, the entire string returned is "The instructors are Tim Matt Colt Elie". 