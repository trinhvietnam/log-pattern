"use strict";
/**
 * Created by NamTV on 3/20/2017.
 */
var Logger_1 = require('../utities/Logger');
// const TAG_FILE ='TAG_FILE = '+ process.mainModule.filename.match(/[\w-]+\.js/gi)[0];
var log = new Logger_1.Logger(__filename);
// var log = new Logger(TAG_FILE);
var Test = (function () {
    function Test() {
    }
    Test.prototype.run = function () {
        var t = { a: 10, b: 'di choi' };
        log.log('Loi o dong nay', true, 123, t);
    };
    return Test;
}());
new Test().run();
