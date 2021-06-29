"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClass = void 0;
class TestClass {
    constructor(name) {
        this.name = Date.now().toString();
    }
    log() {
        console.log(`NPM library is working!! ${this.name}`);
    }
}
exports.TestClass = TestClass;
//# sourceMappingURL=testClass.js.map