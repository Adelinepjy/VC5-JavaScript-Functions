(function () {
    "use strict";

    $(document).ready(function () {
        $("#btnClickMe").bind("click", function () {
            wages();
        });
    });

    function greetings() {
        alert("Hello JavaScript. This is my first function!");
    }

    function wages() {
        var hoursWorked = 15;
        var hourlyRate = 8;

        var totalsalary = hoursWorked * hourlyRate;
        alert("Your Total Salary is " + totalsalary);
    }

} )();