### [The Constructor Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript)

#### Object Creation

Object constructors are used to create specific types of objects - both preparing the object for use and accpeting 
arguments which a constructor can use to set the values of member properties and methods when the object is first created

```javascript
// Each of the following options will create a new empty object:

var newObject = {};

// or
var newObject = Object.create( Object.prototype );

// or the 'Object' constructor in the final example creates an object wrapper for a specific value
var newObject = new Object();
```

There are then four ways in which keys and values can then be assigned to an object:

[demo01.js](#)

```javascript
// ECMAScript 3 compatible approaches

// 1. Dot syntax

// Set properties
var newObject = {};
newObject.someKey = 'Hello World';

// Get properties
var value = newObject.someKey;


// 2. Square bracket syntax

// Set properties
newObject['someKey'] = 'Hello World';

// Get properties
var value = newObject['someKey'];

// ECMAScript 5 only compatible approaches

// 3. Object.defineProperty

// Set properties
Object.defineProperty( newObject, 'someKey', {
    value: 'for more control of the property behavior',
    writable: true,
    enumerable: true,
    configurable: true
});

console.log("newObject:" + newObject);

// If the above feels a litter difficult to read, a short-hand could be written as follows:

var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
};

// To use, we then create a new empty 'person' object
var person = Object.create( Object.prototype );

// Populate the object with properties
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);
console.log(person);

// 4. Object.defineProperties

// Set properties
Object.defineProperties( newObject, {
    'someKey': {
        value: 'hello',
        writable: true
    },
    'anotherKey': {
        value: 'foo',
        writable: false
    }
});

```

#### Basic Constructors

By simply prefixing a call to a constructor function with the keyword 'new', we can tell js we would like the
function to behave like a constructor and instantiate new object with the members defined by that function.

Inside a constructor, the keyword `this` reference the new object that's being created.Revisiting object creation,
a basic constructor may look as follows:

[demo02]()

```javascript
function Car( model, year, miles ) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function () {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}

// Usage:

// We can create new instance of the car
var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
```

#### Constructors With Prototypes

Functions, like almost all objects in JavaScript, contain a `prototype` object. When we call a JS
constructor to create an object, **all the properties of the constructor's prototype are then made
available to the new object**. In this fashion, multiple Car objects can be created which access the
same prototype. We can thus extend the original example as follow:

```javascript
function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}
 
 
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );
```






