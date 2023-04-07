// Array 메소드 : ES5에서 추가 되었으며, 코드를 간결하고 효율적으로 만들어 줌
// 원본 데이터를 변형시키지 않음
// forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행
// map() : 배열의 모든 요소를 순회하면서 새로운 배열을 만듬
// filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열을 만듬
// reduce() : 배열의 모든 요소를 순회하여, 순회 과정에서 누적값을 사용하여 하나의 결과값을 만듬

let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(num => console.log(num));

let squares = numbers.map(num => num * num);
console.log(squares);

let evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

let sum = numbers.reduce(function(tot, num) {
    return tot + num;
}, 0); // 0은 초기값
console.log(sum); // 1부터 10까지를 누적해서 더해 줌
// 위의 식을 화살표함수로 바꿈
let sum1 = numbers.reduce((tot, num) => tot + num, 0);
console.log(sum1);

// ES6 : 자바스크립트의 6번째 버전으로, 2015년에 발표
// 가변 변수와 불변변수 : let, const
// 자바스크립트도 기본타입과 객체 타입으로 나누어지며, 객체 타입의 경우 주소를 가짐

const x = 100;
// x = 200; // const는 상수기 때문에 값을 변경 할 수 없음
console.log(x); 

let arr = [1, 2, 3];
arr = [4, 5, 6]; // arr의 주소가 변경
console.log(arr);

const arr1 = [1,2,3];
arr1[0] = 100;
arr1[1] = 200;
arr1[2] = 300;
console.log(arr1); // 주소가 바뀌지 않았기 때문에 const로 만들어진 배열의 값(안의 내용)은 바꿀 수 있음

// const arr2 = [1,2,3];
// // arr2 = [4,5,6];
// // 이건 주소가 들어가기 떄문에 주소변경이 이루어져서 불가능
// console.log(arr2);

const arr3 = [5,6,7];
const arr4 = [8,9,10];
// 두개의 배열을 합침
const newArr = arr3.concat(arr4);
console.log(newArr);

// 화살표함수 : 화살표 함수는 간단하고 간결한 코드를 작성하는데 유용
const add = function(x, y) {
    return x + y;
}
const add1 = (x, y) => x + y;


// 화살표 함수 사용시 this 문제 해결
// 기존의 함수 정의 방식에서 함수 내부에서 this 키워드를 사용할 때, 호출되는 위치에 따라 참조하는 객체가 다르게 결정되는 문제가있음

// const obj = { 
//     name: "연주",
//     func1() {
//         const func2 = function() {
//             console.log(this.name);
//         }
//         func2(); // 함수표현식이기 때문에 끌어올림이 일어나지않기때문에 한 번 불러줘야함
//     }
// };

// obj.func1();

// const obj1 = { 
//     name: "연주",
//     func3() { // 화살표 함수는 위에서 상속받은 그대로 가지고오기때문에 this가 앞에 name을 뜻하게 됨
//         const func4 = () => {
//             console.log(this.name);
//         }
//         func4(); // 함수표현식이기 때문에 끌어올림이 일어나지않기때문에 한 번 불러줘야함
//     }
// };

// obj1.func3();

// 값이 안들어 오는 경우가 있기 때문에 그때는 화살표 함수를 사용해줘야 함





// addEventlistener 을 쓸때에는 this를 쓰지않거나 function()을 사용해줘야 함
// const btn = document.getElementById("myButton");

// this가 지정이 되어있지 않기때문에 this가 최상위까지(윈도우객체)를 가리킴
// btn.addEventListener("click", () => {
//     console.log(this);
// });

// 동적바인딩이 일어나기 때문에 this가 무엇인지 자동으로 찾아줌
// btn.addEventListener("click", function() {
//     console.log(this);
// });

// const pEls = document.querySelectorAll("p");
// 요소마다 addEventListener을 넣어주려면 앞에 e.요소를 찍어줘야하고 이때는 화살표함수는 쓸 수 없음
// 화살표함수로 바꾸면 동적바인딩이 일어나지 않기때문에
// pEls.forEach(e => e.addEventListener("click", function() {
//     console.log(this);
// }))

// 템플릿 리터럴 : backtick(``)으로 묶는 문자열을 템플릿 리터럴이라고 함
// 템플릿 리터럴은 변수를 쉽게 포함할 수 있고 여러줄의 문자열이 쉽게 표시 됨
const name = "연주";
const seasonMSG = "봄";
const date = "2023. 04. 07"
const message = `안녕, ${name},
${seasonMSG}이에요.
${date}`;
console.log(message);

// 전개연산자(Spread Operator) : 배열이나 객체를 개별요소로 분리
const arr10 = [1,2,3];
const arr11 = [4,5,6];
const newArr1 = [...arr10, ...arr11];
console.log(newArr1); 

const arr40 = [1,2,3,4,5,6,7,8,9,10];
const arr50 = [...arr40];
console.log(arr50);


// 전개 연산자를 이용한 가변 인수 함수 만들기
function sum2(...numers) {
    // 여러개의 매개변수가 들어 갈거라고 선언
    return numbers.reduce((tot, num) => tot + num, 0);
};

console.log(sum2(1,2,3,4,5,6,7,8,9,10));
