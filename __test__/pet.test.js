const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });



    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });


    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });

    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});

    it('increases the hunger property by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });


    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.fitness = 10;
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

describe('walk', () => {

    it('throws an error is the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });

    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 5;
        pet.walk();

        expect(pet.fitness).toEqual(9);
    });
});

    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

describe('feed', () => {

    it('throws an error is the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });

    it('decreases hunger level by 3', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });

    it('decreases hunger level to a minimum of 0', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});

describe('checkup', () => {
    it('tells you if your pet needs walking or not', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        expect(pet.checkup()).toBe("I need a walk");
    });

    it('tells you if your pet is hungry or not', () => {
        const pet = new Pet('Fido');
        pet.hunger = 6;
        expect(pet.checkup()).toBe("I am hungry");
    });

    it('tells you if your pet is hungry and needs a walk', () => {
        const pet = new Pet('Fido');
        pet.hunger = 6;
        pet.fitness = 2;
        expect(pet.checkup()).toBe("I am hungry AND I need a walk");
    });

    it('tells you if your pet is hungry and needs a walk', () => {
        const pet = new Pet('Fido');
        pet.hunger = 3;
        pet.fitness = 6;
        expect(pet.checkup()).toBe("I feel great");
    });
});

describe('death', () => {
    it('tells you if your pet is alive - fitness', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(pet.isAlive).toBe(false);
    });

    it('tells you if your pet is alive - hunger', () => {
        const pet = new Pet('Fido');
        pet.hunger = 12;
        expect(pet.isAlive).toBe(false);
    });

    it('tells you if your pet is alive - age', () => {
        const pet = new Pet('Fido');
        pet.age = 31;
        expect(pet.isAlive).toBe(false);
    });

    it('returns true if hunger is less than 10, fitness is more than 0 and age is less than 30', () => {
        const pet = new Pet('Fido');
        pet.hunger = 9;
        pet.fitness = 1;
        pet.age = 29;
        expect(pet.isAlive).toBe(true);

    })

 

        });
    describe('having a baby', () => {
        it('has a baby', () => {
        const parent = new Pet("Fido");
        parent.haveBaby('Amelia');
    
        expect(parent.children[0].name).toEqual("Amelia");
        expect(parent.children[0]).toBeInstanceOf(Pet);

    });

});

