"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectFactory = void 0;
const testClass_1 = require("./testClass");
class ObjectFactory {
    static createInstance() {
        return new testClass_1.TestClass('random');
    }
}
exports.ObjectFactory = ObjectFactory;
//# sourceMappingURL=objectFactory.js.map