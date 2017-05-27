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

    var x = 100;

    function wages(hoursWorked, hourlyRate) {
        var totalsalary = hoursWorked * hourlyRate;
        alert("Popping x within the function " + x);
        return totalsalary;
    }

    alert("Popping x outside the function " + x);

    var x = 100;

    function goo(x) {
        x = x + 1;
        return x;
    }
    function foo(x) {
        x = x - 1;
        return x;
    }

    alert("Value of foo " + foo(x));
    alert("Value of goo " + goo(x));
    alert("value of x " + x);

} )();