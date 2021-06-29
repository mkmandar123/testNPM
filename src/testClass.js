"use strict";
exports.__esModule = true;
exports.TestClass = void 0;
var TestClass = /** @class */ (function () {
    function TestClass(name) {
        this.name = Date.now().toString();
    }
    TestClass.prototype.log = function () {
        console.log("NPM library is working!! " + this.name);
    };
    return TestClass;
}());
exports.TestClass = TestClass;
