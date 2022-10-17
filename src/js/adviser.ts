class Adviser extends Caracter {
    caracter: Caracter;
    constructor(
        name: string,
        age: number,
        family: string,
        isAlive: boolean,
        caracter: Caracter
    ) {
        super(name, age, family, isAlive);
        this.caracter = caracter;
    }
    communicate() {
        return 'No sé por qué, pero creo que voy a morir pronto';
    }
}
