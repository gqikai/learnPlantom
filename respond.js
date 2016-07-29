/**
 * Created by gaoqikai on 7/29/16.
 */
var page = require('webpage').create();
page.onResourceRequested = function(request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
};
page.open('http://lorem.me/blog');