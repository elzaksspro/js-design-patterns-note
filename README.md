# [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

## What is a Pattern

A pattern is a resuable solution that can be applied to commonly occurring problems in software design

So, why is it important to understand patterns and be familiar with them? Design patterns have three main
benefits:

* **Patterns are proven solutions**
* **Patterns can be easily resued**
* **Patterns can be expressive**

Next we'll take a look at some of the other advantages patterns have to offer

* **Reusing patterns assists in preventing minor issues that can cause major problems in the application development process**
* **Patterns can provide generalized solutions which are documented in a fashion that doesn't require them to be tied to a specific problem**
* **Certain patterns can actually decrease the overall file-size footprint of our code by avoiding repetition**
* **Pattern add to a developer's vovabulary, which makes communication faster**

## The Stucture Of A Design Pattern

A pattern is initially presented in the form of a **rule** that establishes a relationship between:

* A **context**
* A system of **forces** that arises in that context and
* A **configuration** that allows these forces to resolve themselves in context

A design pattern should have a:

* **Pattern name** and  a **description** 
* **Context outline** -- the contexts in which the patterns is responding to the users needs
* **Problem statement** -- a statement of the problem being addressed so we can understand the intent of the pattern.
* **Solution** -- a description of how the user's problem is being solved in an understandable list of step and perceptions.
* **Design** -- a description of the pattern's design and in particular, the user's behavior in interacting with it
* **Implementation** -- a guide to how the pattern would be implemented
* **Illustrations** -- a visual representation of classes in the pattern
* **Example** -- an implementation of the pattern in a minimal form
* **Co-requisites** -- what other patterns may be needed to support use of the pattern being described?

## Anti-Patterns

There are two notion of anti-patterns that are presented. Anti-Patterns:
 
* Describe a `bad` solution to a particular problem which resulted in a bad situation occurring
* Describe `how` a get out of saild situation and how to go from there to a good solution

To summarize, an anti-pattern is a bad design that is worthy of documenting. Examples of anti-patterns in JS are the following:

* Polluting the global namespace by defining a large number of variables in the global context
* Passing strings rather than functions to either setTimeout or setInterval as this triggers the use of `eval()` internally
* Modifying the `Object` class prototype(this is a particularly bad anti-pattern)
 
## Categories Of Design Pattern
 
### Creational Design Patterns
 
Creational design patterns focus on handling object creation mechanisms. Some of the patterns that fall under this category
are: `Constructor`, `Factory`, `Abstract`, `Prototype`, `Singleton` and `Builder`.
 
### Structural Design Patterns
 
Structural design patterns are concerned with object composition and typically identify simple ways to realize relationships
between different object. Patterns that fall under this category include: `Decorator`, `Facae`, `Flyweight`, `Adapter`, and `Proxy`

### Behavioral Design Patterns
 
Behavioral patterns focus on improving or streamlining the communication between disparate objects in a system. Some behavioral
patterns include: `Iterator`, `Mediator`, `Observer`, and `Visitor`

## A brief note on classes

The most common approach to achieving this is by defining a JS function where we then create an object using the `new` keyword.
`this` can be used to help define new properties and methods for the object as follows:

```Javascript
// A car "class"
function Car( model ) {
 
  this.model = model;
  this.color = "silver";
  this.year  = "2012";
 
  this.getInfo = function () {
    return this.model + " " + this.year;
  };
 
}
```

We can then instantiate the object using the Car constructor we defined above like this:

```javascript
var myCar = new Car('ford');
myCar.year = '2010';
console.log( myCar.getInfo() );
```

