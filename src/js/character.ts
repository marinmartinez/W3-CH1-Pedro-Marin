class Caracter {
    name: string;
    age: number;
    family: string;
    isAlive = true;
    constructor(name: string, age: number, family: string, isAlive: boolean) {
        this.name = name;
        this.age = age;
        this.family = family;
        this.isAlive = isAlive;
    }
    death() {
        this.isAlive = false;
    }
    Communicate() {
        return ' ';
    }
}
