class Fighter extends Caracter {
    weapon: string | null;
    skill: number | null;
    constructor(
        name: string,
        age: number,
        family: string,
        isAlive: boolean,
        weapon: string,
        skill: number
    ) {
        super(name, age, family, isAlive);
        this.weapon = weapon;
        this.skill = skill;
    }

    communicate() {
        return 'Primero pego y luego pregunto';
    }
}
