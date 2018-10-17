export class Stuffy {
    private name: string;
    private type: string;
    private color: string;
    constructor(name: string, type: string, color: string) {
        this.name = name;
        this.type = type;
        this.color = color;
    }

    about(): string {
        return `name: ${this.name}, type: ${this.type}, color ${this.color}`;
    }

    get getName(): string {
        return this.name
    }
    set setName(name: string) {
        this.name = name;
    }
}

let g: Stuffy = new Stuffy("George", "Bear", "Brown");
console.log(g.about());
console.log(g.getName);