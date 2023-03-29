class Vehicle {
    constructor(maker, model, year, color, speed) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }
    getMaker() {
        return this.maker;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getColor() {
        return this.color;
    }
    getSpeed() {
        return this.speed;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`The ${this.maker} ${this.model} is now going ${this.speed} km/h.`);
    }
    break(amount) {
        this.speed = Math.max(0, this.speed - amount); // 둘 중에 더 큰걸 찍어주기위해; speed는 0이하가 될 수 없음
        console.log(`The ${this.maker} ${this.model} is now going ${this.speed} km/h.`);
    }
    static getNumberOfWheels() {
        return 0;
    }
}

class Car extends Vehicle {
    constructor(maker, model, year, color, numDoors) {
        super(maker, model, year, color); // 부모생성자 불러줌
        this.numDoors = numDoors;
    }
    getNumDoors() {
        return this.numDoors;
    }
    static getNumberOfWheels() {
        return 4;
    }
}

class Truck extends Vehicle {
    constructor(maker, model, year, color, towingCapacity) {
        super(maker, model, year, color);
        this.towingCapacity = towingCapacity;
    }
    gettowingCapacity() {
        return this.towingCapacity;
    }
    static getNumberOfWheels() {
        return 6;
    }
}

const myCar = new Car("HyunDai","Sonata", "2023", "pink", 4);
console.log(myCar.getMaker());
console.log(myCar.getModel());
console.log(myCar.getYear());
console.log(myCar.getColor());
console.log(myCar.getSpeed());
console.log(myCar.getNumDoors());
myCar.accelerate(30);
myCar.break(10);
console.log(Car.getNumberOfWheels());

console.log("----------------------------------");
const myTruck = new Truck("Kia","Proter", "2021", "blue", 10000);
console.log(myTruck.getMaker());
console.log(myTruck.getModel());
console.log(myTruck.getYear());
console.log(myTruck.getColor());
console.log(myTruck.getSpeed());
console.log(myTruck.gettowingCapacity());
myTruck.accelerate(30);
myTruck.break(10);
console.log(Car.getNumberOfWheels());