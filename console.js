/**
 * Created by gaoqikai on 7/29/16.
 */
var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
    console.log('console message: ' + msg);
};
page.open('http://lorem.me/blog', function(status) {
    page.evaluate(function() {
        console.log(document.title);
    });
    phantom.exit();
});