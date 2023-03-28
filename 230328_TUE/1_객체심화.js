// 객체는 중괄호를 사용하여 만듬, 속성(property)과 값(value)의 쌍으로 이루어짐
const person = {
    title : "연주의대모험",
    name : "연쥬",
    age : 100,
    job : "킹"
};
console.log(person.name);

const person1= {
    name1 : {
        firstName : "연쥬",
        lastName : "좡"
    },
    age : 100,
    isAdult : true,
    printInfo : function() {
        return this.name1;
    }
};

console.log(person1.printInfo());
console.log(person1.printInfo().firstName);
console.log(person1[`isAdult`]);

// 변경하기
person1.name1.firstName = "Yeonjoo";
person1.name1.lastName = "Jang";
console.log(person1.printInfo());

// 동적추가하기
const carInfo = {};
carInfo.name = "Santafe";
carInfo.year = "2002/09/15";
carInfo.maxSpeed = "230km";
console.log(carInfo);

delete carInfo.maxSpeed;
console.log(carInfo);

let person2 = {
    name : "연주연쥬",
    age : 200,
    sayHello : function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
person2.sayHello();

// 객체 생성자 : 객체 생성자는 템프릿으로 사용하여 동일한 속성과 메소들르 가진 객체를 여러 개 생성할 떄 사용
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, My name is ${this.name}`);
    };
};
let person3 = new Person("연주", 1340);
let person4 = new Person("연쥬우우", 40);

person3.sayHello();
person4.sayHello();