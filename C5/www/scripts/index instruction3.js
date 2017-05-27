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

    function wages(hoursWorked, hourlyRate) {
        var totalsalary = hoursWorked * hourlyRate;
        return totalsalary;
    }

} )();