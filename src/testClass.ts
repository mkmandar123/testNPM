export class TestClass {
    private readonly name: string;

    constructor(name: string) {
        this.name = Date.now().toString();
    }

    log(): void {
        console.log(`NPM library is working!! ${ this.name }`);
    }
}
