### [The Module Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)

#### Modules
In Javascript, there are several options for implementing modules. These include:

* The Module pattern
* Object literal notation
* AMD modules
* CommonJS modules
* ECMAScript Harmony modules

#### Object Literals

```javascript
var myObjectLiteral = {
 
    variableKey: variableValue,
 
    functionKey: function () {
      // ...
    }
};
```

Outside of an object, new members may be added to it using assignment as follows `myModule.property = 'someValue'`

We can see a more complete example of a module defined using object literal notaion.

[demo01]()

```javascript
var myModule = {
 
  myProperty: "someValue",
 
  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },
 
  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },
 
  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching  ? "enabled" : "disabled") );
  },
 
  // override the current configuration
  updateMyConfig: function( newConfig ) {
 
    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};
 
// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();
 
// Outputs: Caching is: enabled
myModule.reportMyConfig();
 
// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});
 
// Outputs: Caching is: disabled
myModule.reportMyConfig();
```

#### The Module Pattern

Let's begin looking at an implementation of the Module pattern by creating a module which is self-contained

[demo02]()
```javascript
var testModule = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log('counter value prior to reset ' + counter);
            counter = 0;
        }
    };
})();

// Usage:

// Increment our counter
testModule.incrementCounter();
testModule.resetCounter();
```
Our methods are effectively namespanced so in the test section of our code, we need to 
prefix any calls with the name of the module(e.g 'testModule')


When working with the Module pattern, we may find it useful to define a simple template that
we use for getting started with it. Here's one that covers namespacing, public and private variables:


[demo03]()

```javascript
var myNamespace = (function () {
    var myPrivateVar, myPrivateMethod;
    
    // A private counter variable
    myPrivateVar = 0;
    
    // A private function which logs any arguments
    myPrivateMethod = function (foo) {
        console.log(foo);
    };
    
    return {
        // A public variable
        myPublicVar: 'foo',
        
        // A public function utilizing privates
        myPublicFunction: function (bar) {
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})();
```

Looking an another example, below we can see a shopping basket implemented using this pattern.
The module itself is completely self-contained in a global variable called `basketModule`. The `basket`
array in the module is kept private and so other parts of our application are unable to directly
read it. It only exists with the module's closure and so the only methods able to access it are
those with access to its scope.

[demo4]()

```javascript
var basketModule = (function () {
    // privates
    
    var basket = [];
    
    function doSomethingPrivate() {
        // ..
    }
    
    function doSomethingElsePrivate() {
        
    }
    
    // Return an object exposed to the public
    return {
        // Add items to our basket
        addItem: function (values) {
            basket.push(values);
        },
        
        // Get the count of items in the basket
        getItemCount: function () {
            return basket.length;
        },
        
        // Public alias to a private function
        doSomething: doSomethingPrivate,
        
        // Get the total value of items in the basket
        
        getTotal: function () {
            var q = this.getItemCount();
            var p = 0;
            
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    };
    
})();


basketModule.addItem({
    item: 'bread',
    price: 0.5
});

basketModule.addItem({
    item: 'butter',
    price: 0.3
});

// Outputs:2
console.log(basketModule.getItemCount());

// Output: 0.8
console.log(basketModule.getTotal());
```

#### Module Pattern Variations

##### Import mixins

This effectively allows us to import them and locally alias them as we wish

[demo05]()

```javascript
// Global module
var myModule = (function (JQ, _) {
    function privateMethod1() {
        jQ('.container').html('test');
    }
    function privateMethod2() {
        console.log(_.min([10, 5, 100, 2, 10000]));
    }
    return {
        publicMethod: function () {
            privateMethod1();
        }
    };
})(jQuery, _);
```





