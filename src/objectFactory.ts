import {TestClass} from "./testClass";

export class ObjectFactory {
    static createInstance(): TestClass {
        return new TestClass('random');
    }
}
