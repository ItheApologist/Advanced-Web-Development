# Section 9 Notes

## Jasmine

Jasmine is a testing library that integrates with both browsers and node for fullstack testing. It is unit testing, meaning it is meant for testing small and specific sections of code.

### Jasmine Keywords

Jasmine has three keywords:

* describe - The declaration of a set of test to be run. 
* it - The test to be run within a describe.
* expect - The result you expect to happen.

Example:

```js
var earth = {
    isRound: true,
    numberFromSun: 3
}

describe("Earth", function(){
    it("is round", function(){
        expect(earth.isRound).toBe(true)
    });
    it("is the third planet from the sun", function(){
        expect(earth.numberFromSun).toBe(3)
    });
});
```

In the above example, we define an object called earth. We then describe a set of test called "Earth" and set a function. In that function, we have two its. Each one has a name and a function. Inside those functions, we have an expect that runs a simple method, .toBe, against a key value within the earth object. When run, we will have two specs (test) and no failures.

### Jasmine Matchers

Jasmine matchers are the methods that are run against test to determine if logic fails or passes.

Matchers:

* toBe/not.toBe - Uses === to compare the value of an object value to a given value.
* toBeCloseTo - Compares two values and accepts a second value for precision. Useful when you need to compare something to be similar and not exactly the same. 
* toBeDefined - Used to make sure variables have a specific value and are not undefined.
* toBeFalsy/toBeTruthy - Checks to see if a boolean value is true or false.
* toBeGraterThen/toBeLessThan - Checks to compare if a number is grater then or less then another number. 
* toContain - Will check to see if a value is contained in a array or not.
* toEqual - Triple equals can sometimes throw false negatives due to references in memory, typically with array object comparisons. toEqual will only compare the values of the objects, ignoring the memory references, making things like array comparisons possible.
* jasmine.any() - Checks to see if a value is an array, function, or constructed from a specific function.

### Before and After Jasmine Functions

beforeEach runs a set of code and functions before each subsequent it is run.

afterEach runs a set of code and functions after each subsequent it is run.

beforeAll runs a set of code and functions before all test.

afterAll runs a set of code and functions after all test.

### Spies

Spies are how mocking are done in Jasmine. Mocking is a way of creating a function that a test of code might depend on without actually creating the function object.

Spies only exist in the describe or it block in which it is defined. Spies are then removed after each spec.

spyOn() is invoked when a function already exist outside the testing code. spyOn has several methods that can be called for it:

* .toHaveBeenCalled() - Will check to see if the function was called at all.
* .toHaveBeenCalledWith() - Will take in a set of parameters and see if they were called with the function.
* .toEqual() - Takes in a parameter and checks to see that value is returned.
* .calls - Checks to see how many times a spy was called or if any at all.

### Clock

Clock is the Jasmine tool used to test asynchronous code. Clock can be installed (usually in a beforeEach callback) by invoking ```jasmine.clock().install()```. You need to be sure to uninstall the clock after each it.

## Methods for Testing Code

### Test Driven Development

TDD, or Test Driven Development, is a method of testing your code BEFORE it is actually written. It involves the following steps:

1. Write the test for code.
2. The test will ultimately fail because the underlying code needed to make everything function will not exist.
3. Write the code necessary to have the test code pass.
4. Refactor the newly written code as needed.
5. Repeat. 

The idea is that by writing our test first, we lessen the chance of newly written code causing problems. It is not a universally accepted method of writing code.

### Behavior Driven Development

BDD, or Behavior Driven Development, is a subset of TDD, though they are not mutually exclusive. It involves being verbose with our style and describing the behavior of the functionality opposed to just describing expected outcomes when testing.

## Types of test

Unit Test - Test which are written for one small component or unit of an application. They are written for the purpose of proving that the units or parts of your application behave as expected before they are put together.

Integration Test - While unit testing insures that the individual pieces of our code will work, it doesn't guarantee that our code will work together. Integration testing is for those larger parts of the application that combine many units together.

Acceptance Test - These test involve performing test on the full system which could be using your application in the browser or on a device to see whether the applications functionality satisfies a specification provided.

Stress Test - These test determine how effective our applications can be under unfavorable conditions like high traffic load. 