/**
 * Created by gaoqikai on 7/29/16.
 */
var webpage = require('webpage');
var loginPage = webpage.create();
var data = 'loginid=370786196410153915&password=dingyukun';

loginPage.open('http://id.qlteacher.com/dapi/user/login', 'post', data, function (status) {
    console.log(status);
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        var getpage = webpage.create();

        getpage.open('http://www.httpuseragent.org', function(status) {
            if (status !== 'success') {
                console.log('Unable to access network');
            } else {
                var ua = page.evaluate(function() {
                    return document.getElementById('myagent').textContent;
                });
                console.log(ua);
            }
            phantom.exit();
        });

    }
    phantom.exit();
});

var data = {
    "objectName": "WebPage",
    "title": "",
    "frameTitle": "",
    "content": "<html><head></head><body><pre style=\"word-wrap: break-word; white-space: pre-wrap;\">true</pre></body></html>",
    "frameContent": "<html><head></head><body><pre style=\"word-wrap: break-word; white-space: pre-wrap;\">true</pre></body></html>",
    "url": "http://id.qlteacher.com/dapi/user/login",
    "frameUrl": "http://id.qlteacher.com/dapi/user/login",
    "loading": false,
    "loadingProgress": 100,
    "canGoBack": false,
    "canGoForward": false,
    "plainText": "true",
    "framePlainText": "true",
    "libraryPath": "/Users/gaoqikai/test/learnPlantom",
    "offlineStoragePath": "/Users/gaoqikai/Library/Application Support/Ofi Labs/PhantomJS",
    "offlineStorageQuota": 5242880,
    "viewportSize": {"height": 300, "width": 400},
    "paperSize": {},
    "clipRect": {"height": 0, "left": 0, "top": 0, "width": 0},
    "scrollPosition": {"left": 0, "top": 0},
    "navigationLocked": false,
    "customHeaders": {"DNT": "1", "X-Test": "foo"},
    "zoomFactor": 1,
    "cookies": [{
        "domain": ".qlteacher.com",
        "expires": "Fri, 29 Jul 2016 15:56:30 GMT",
        "expiry": 1469807790,
        "httponly": false,
        "name": "userInfo",
        "path": "/",
        "secure": false,
        "value": "1BAD726FEB2E1476BF5EC06CC92EAD20D9FA2908A0000015637281CD244594D550701585342120A4653505B5D0313490A125507052881CAF08BFAEC87FBEE"
    }],
    "windowName": "",
    "pages": [],
    "pagesWindowName": [],
    "ownsPages": true,
    "framesName": [],
    "frameName": "",
    "framesCount": 0,
    "focusedFrameName": "",
    "cookieJar": {
        "objectName": "",
        "cookies": [{
            "domain": ".qlteacher.com",
            "expires": "Fri, 29 Jul 2016 15:56:30 GMT",
            "expiry": 1469807790,
            "httponly": false,
            "name": "userInfo",
            "path": "/",
            "secure": false,
            "value": "1BAD726FEB2E1476BF5EC06CC92EAD20D9FA2908A0000015637281CD244594D550701585342120A4653505B5D0313490A125507052881CAF08BFAEC87FBEE"
        }]
    }
}
