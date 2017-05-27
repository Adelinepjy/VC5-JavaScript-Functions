(function () {
    "use strict";

    $(document).ready(function () {
        $("#btnClickMe").bind("click", function () {

        });

        var johnSalary;
        johnSalary = wages(12, 8);

        var peterSalary;
        peterSalary = wages(10, 7.5);

        var total = johnSalary + peterSalary;
        alert("John and Peter were paid " + total + " in total.");

    });

    function greetings() {
        alert("Hello JavaScript. This is my first function!");
    }

    var x = "hello";
    var y = 2
    alert(isNaN(x)); //returns true since x is not a number
    alert(isNaN(y)); //returns false since y is a number

    var a = "1";
    alert(a + a); //returns 11
    alert(parseInt(a) + parseInt(a)); //returns 2

    var b = "2.56";
    alert(b + b); //returns 2.562.56
    alert(parseFloat(b) + parseFloat(b)); //returns 5.12

})();