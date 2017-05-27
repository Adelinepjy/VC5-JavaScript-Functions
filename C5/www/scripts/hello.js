(function () {
    "use strict";

    $(document).ready(function () {

        $("#btnHome").bind("click", function () {
            home();
        });

        $("#btnHello").bind("click", function () {
            hello();
        });

        $("#btnGoodbye").bind("click", function () {
            goodbye();
        });

    });

})();