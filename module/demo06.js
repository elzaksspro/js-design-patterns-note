var SingletonTester = (function () {
    function Singleton(options) {
        options = options || {};

        this.name = 'SingletonTest';
        this.optionX = options.pointX || 6;
        this.optionY = options.pointY || 10;
    }
    // our instance holder
    var instance;
    var _static = {
        name: 'SingletonTester',
        // Method for getting an instance. It returns a singleton instance of a singleton object
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
    
})();
var singletonTest = SingletonTester.getInstance({pointX: 5});

console.log(singletonTest.optionX);