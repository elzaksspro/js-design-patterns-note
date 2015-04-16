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