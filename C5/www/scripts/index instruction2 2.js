(function () {
    "use strict";

    $(document).ready(function () {
        $("#btnClickMe").bind("click", function () {
            wages(10, 7.5);
        });

        wages(12, 8);
    });

    function greetings() {
        alert("Hello JavaScript. This is my first function!");
    }

    function wages(hoursWorked, hourlyRate) {
        var totalsalary = hoursWorked * hourlyRate;
        alert("Your Total Salary is " + totalsalary);
    }

} )();