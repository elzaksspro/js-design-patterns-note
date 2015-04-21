### [The Observer Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)

The Observer is a design pattern where an object(known as a subject) maintains a list of objects depending on it(observers),
automatically notifying them of any changes to state.

When a subject needs to notify observers abount something interesting happening, it broadcast a notification to the observers
(which can include specific data related to the topic of the notification)

When we no longer wish for a particular observer to be notified of changes by the subject they are registered with, the subject
can remove them from the list of observers

We can now expand on what we've learned to implement the Observer pattern with the following components:

* **Subject:** matintains a list of observers, facilitates adding or removing observers
* **Observer:** provides a update interface for objects that need to be nofified of a Subject's changes of state
* **ConcreteSubject:** broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
* **ConcreteObserver:** stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's

[demo01]()
