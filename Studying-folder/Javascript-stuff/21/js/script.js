class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    
    #surname = 'Petrychenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возвраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
        this._age = age;
        } else {
            console.log('Недопустимое значение')
        }
    }
}

class Car {
    constructor(model, year, color) {
        this.model = model;
        this._year = year;
    }

    #color = color;

    get color() {
        return this.#color;
    }
}

const wrom = new Car('GreatMob', 1997, 'red');

console.log(wrom.color);

// const ivan = new User('Ivan', 27);

// console.log(ivan.name);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
// console.log(ivan.surname);
// ivan.say();