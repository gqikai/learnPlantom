/**
 * Created by gaoqikai on 7/29/16.
 */
var page = require('webpage').create();
page.open('http://example.com', function(status) {
    var title = page.evaluate(function() {
        return document.title;
    });
    console.log('Page title is ' + title);
    phantom.exit();
});