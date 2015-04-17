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