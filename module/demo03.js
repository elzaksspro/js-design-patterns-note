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