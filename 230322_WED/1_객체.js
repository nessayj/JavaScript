// 배열 : 자바스크립트의 배열은 모든 자료형을 저장할 수 있음. (또 다른 배열을 포함 할 수 있음)
let score = [80, 99, 77, 65];
console.log(score);
console.log(score[2]); // 배열은 인덱스로 요소를 접근(인덱스는 항상 0부터 시작)

// let은 변수를 만드는 키워드 (자바스크립트는 변수를 만들 떄 자료형을 지정하지 않으며 값이 대입될 때 데이터의 형이 결정)
// 자바스크립트의 배열은 모든 자료형을 함께 사용 할 수 있음
let array = ["연쥬", "연주장", 10, true, [100, 99, 88], 1010, "1010", ["연주가최고시다", "연주", "연주연주"]];

console.log(array);
console.log(array[0]);

console.log(array[4]);
console.log(array[4][1]);

console.log(array[0][1]); // 문자열일 경우에는 그 자료형이 있는 인덱스 번호와 특정 문자열의 인덱스 번호를 같이 넣어주면 그것이 출력 됨
console.log(array[5][3]); // 숫자이기때문에 되지 않음. = undefined
console.log(array[6][2]);

console.log(array[7][0][4]);

// 빈 배열 생성 후 동적으로 값을 대입할 수 있음
let arr = [];
arr[0] = 100;
console.log(arr);

// 객체 리터럴 : 중괄호{}를 사용해서 정의하고, 키와 값이 한 쌍으로 이루어짐
let score1 = [80, 99, 77, 65];

let score2 = {
    kor : 80,
    eng : 99,
    mat : 77,
    scn : 87
};
console.log(score2);
// .(dot)를 사용하여 접근
console.log(score2.eng);
// []에 키명을 넣어서 접근
console.log(score2['mat']);

score2.eng = 100;
console.log(score2.eng); // 값을 바꿈

const person = {
    name : "연쥬",
    age : 10,
    city : "쎼울",
    getInfo : function() {
        return`${this.name} is ${this.age} years old and lives in ${this.city}.`;
    }
}

console.log(person.getInfo());

// typeof : 데이터형을 확인하는 예약어
let name = "연주";
console.log(typeof(name));

// toString() : 배열안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits);
