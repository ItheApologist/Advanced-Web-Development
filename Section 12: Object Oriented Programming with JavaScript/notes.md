# Section 12 Notes

## Object Oriented Programming in JavaScript

OOP is programming model based around the idea of objects and blueprints which create objects. These blueprints are called classes. Objects created within these classes are called instances.

Unlike other programming languages, JavaScript doesn't have classes built in. However, this can be mimicked by using functions and objects.

Example:

```js
var house = {
    bedrooms: 2,
    bathroom: 2,
    sqFeet: 1000
}

var house2 = {
    bedrooms: 2,
    bathroom: 2,
    sqFeet: 1000
}

var house3 = {
    bedrooms: 2,
    bathroom: 2,
    sqFeet: 1000
}
```

In the above example, we have three objects variables which all have the same basic key-value pair construction. This code is really inefficient. We can refactor this code using the concept of OOP.

```js
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
```

Above, we just created a blueprint, also known as a constructor function, in order to create a template for our objects we will be creating. The function name is capitalized in order to distinguish it as a constructor function, pre best practice.

To utilize this function to create objects, use the new keyword with the function.

Example:

```js
var firstHouse = new House(2,2,1000);
firstHouse.bedrooms; // returns 2
firstHouse.bathrooms; // returns 2
firstHouse.numSqft; // returns 1000
```

As you can see, by using constructor functions, the keyword this, and the new keyword, we can quickly create many new objects utilizing our blueprint.

### Refactoring Constructors

We can even use this concept to refactor constructors themselves. Take this example below:

```js
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}
```

As you can see, both Car and Motorcycle contain three out of four of the same values for our objects. This isn't efficient. We can refactor this code using constructor concepts and the call/apply/bind methods.

Example:

```js
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    Car.call(this, make, model, year);
    this.numWheels = 2;
}
```

Above, we refactored our Motorcycle function by using the call method. We specify the value of the keyword this inside the Car function by using the keyword this itself. 

The reason for that is if we didn't, the keyword this inside the car function will refer to the car function because of context rules. So, we need to specify it to be the object we will be creating with Motorcycle function. Since we will be using the Motorcycle function with the new keyword, we know that the context of this with the new keyword is the newly crated object, so we use the keyword this inside the call function.

Finally, we pass in the make, model, and year parameters to complete the Motorcycle object, leaving out numWheels to be specified below.

## Prototypes

The prototype property is an object which can have methods and properties placed on it. These methods and properties are shared and accessible by any object that is created from the constructor function.

Example:

```js
// the constructor function
function Person(name) {
    this.name = name;
}

// objects created from constructor function
var elie = new Person("Elie");
var colt = new Person("Colt");

// adding a new method to the Person object
Person.prototype.isInstructor = true;

// created objects now have access to that method

elie.isInstructor; // returns true
colt.isinstructor; // returns true
```

In the above example, we modify the available methods of our newly created objects by modifying the original constructor functions methods. To do this, we call the Person object with the prototype method, followed by the method we are creating and what it will equal. Next, when we call that method on our new Person objects, elie and colt, we are returned the value since they call back to the original prototype object on Person through the dunder-prototype object they have (__proto__).

Something to note, JavaScript will access these methods using what is known as the prototype chain. When a method is called on an object, it will scan through the root objects available methods first, then, move to the next dunder-proto objects' methods, and so on and so forth until the method is found, or, if not, return null.

## Inheritance

Inheritance is the passing of methods and properties from one class to another. Though JavaScript is not an object oriented programming language, we can mimic inheritance with objects and functions just like we do with our constructor functions. 

We cannot flat out make the prototype of a newly created object that of another object. This will cause any changes to the child object to effect the parent object. To inherent the parent constructors prototype, we can use the Object.create value to achieve this without it affecting the parent object when the child is modified. 

Example:

```js
function Student(firstName, lastName) {
    return Person.apply(this, arguments);
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;
```

By setting a new object's prototype to the value of Object.create with the parent object prototype passed in, we can now make changes to the Student prototype without it causing changes to the Person object's prototype. Finally, we reset the constructor value to the Student object. This has to be done because it is currently set to the Person object since we used that prototype to construct our new object. 