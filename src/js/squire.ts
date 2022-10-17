class Squire extends Caracter {
    lord: Fighter;
    constructor(
        name: string,
        age: number,
        family: string,
        isAlive: boolean,
        lord: Fighter
    ) {
        super(name, age, family, isAlive);
        this.lord = lord;
    }

    communicate() {
        return 'Soy un loser';
    }
}
