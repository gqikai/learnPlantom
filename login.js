/**
 * Created by gaoqikai on 7/29/16.
 */
console.log("got here");
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};


page.open("http://id.qlteacher.com/?do=logout", function(status) {
    if ( status === "success" ) {
        page.evaluate(function() {
            document.querySelector("#username").value = "email";
            document.querySelector("#userpd").value = "pass";
            console.log(document.querySelector("#btn-login"));
            document.querySelector("#btn-login").submit();

            console.log("Login submitted!");
        });
        window.setTimeout(function () {
            page.render('colorwheel.png');
            phantom.exit();
        }, 5000);
    }
});