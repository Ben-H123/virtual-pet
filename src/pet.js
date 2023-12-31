const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;
const MAXIMUM_HUNGER = 10;
const MINIMUM_FITNESS = 0;

function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
}


Pet.prototype = {
    get isAlive() {
        return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
         }
    }


Pet.prototype.growUp = function () {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};


Pet.prototype.walk = function() {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }

    this.fitness += 4;

    if (this.fitness > MAXIMUM_FITNESS) {
        this.fitness = MAXIMUM_FITNESS
    }

}

Pet.prototype.feed = function() {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }

    this.hunger -= 3;

    if (this.hunger < 0) {
        this.hunger = 0
    }

}

Pet.prototype.checkup = function() {

    const isUnfit = this.fitness <= 3;
    const isHungry = this.hunger >= 5;
    const iAmHungry = "I am hungry";
    const iNeedAWalk = "I need a walk"

    if(isUnfit && isHungry) {
        return `${iAmHungry} AND ${iNeedAWalk}`
    }

    if(isUnfit) {
        return iNeedAWalk;
    }

    if(isHungry) {
        return iAmHungry;
    }

    return 'I feel great';

}

Pet.prototype.haveBaby = function (name) {
    const child = new Pet(name)
    this.children.push(child);
}



module.exports = Pet;