"use strict";
exports.__esModule = true;
exports.ObjectFactory = void 0;
var testClass_1 = require("./testClass");
var ObjectFactory = /** @class */ (function () {
    function ObjectFactory() {
    }
    ObjectFactory.createInstance = function () {
        return new testClass_1.TestClass('random');
    };
    return ObjectFactory;
}());
exports.ObjectFactory = ObjectFactory;
