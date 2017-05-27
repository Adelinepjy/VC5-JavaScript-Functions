(function () {
    "use strict";

    $(document).ready(function () {
        $("#btnClickMe").bind("click", function () {
            greetings();
        });

        greetings();
    });

    function greetings() {
        alert("Hello JavaScript. This is my first function!");
    }

} )();