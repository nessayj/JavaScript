// 배열을 다루는 Array 객체
// forEach() : 비파괴적인 메소드이며, 요소를 순회

const arr = [10, 20, 30, 40, 50];
arr.forEach(function(n) {
    console.log(n);
});

// toString() : 배열안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// join() : 배열안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합
console.log(fruits.join(" * "));

// pop() : 스택 자료 구조이며 마지막에 추가된 값을 제거 
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits2.pop());
// console.log(fruits2);

// push() : 값을 뒤에 추가
fruits2.push("Kiwi");
console.log(fruits2);

// shift() : 첫번째 요소를 제거하고 값을 반환
console.log(fruits2.shift());
console.log(fruits2);

// unshift() : 배열의 맨앞의 요소를 추가하고 배열의 길이를 반환
console.log(fruits2.unshift("Lemon"));
console.log(fruits2);

// 배열 요소의 변경
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3[0] = "Kiwi";
console.log(fruits3);

// concat() : 2개 이상의 배열을 하나의 배열로 결합
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

// slice() : 시작 인덱스 부터 종료 인덱스 미만까지의 배열의 요소를 잘라냄
let fruits10 = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
let slice1 = fruits10.slice(3); // 3번째 요소 부터 끝까지 
let slice2 = fruits10.slice(1,3); // 1번 인덱스에서 3번 인덱스 미만의 요소
console.log(slice1);
console.log(slice2);

// sort() : 오름차순 정렬
fruits10.sort();
console.log(fruits10); 

// reverse() : 내림차순 정렬
console.log(fruits10.reverse());

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열 생성
let person = [
    {
        name : "연주장",
        Point : 78 ,
        city : "서울"
    },
    {
        name : "연듀",
        point: 92,
        city : "서울"
    },
    {
        name : "잼잼",
        point : 76,
        city : "부산"
    },
    {
        name : "핑핑",
        point : 81,
        city : "제주"
    }

];

let pass = person.filter(person => person.point > 80); //() 안은 순회할 요소 이름은 아무렇게나 지정해줘도됨
console.log(pass);

// 날짜와 시간을 다루는 Date 객체
const date = new Date();
console.log(date);

// 인스턴스 만들기
// 월은 0 부터 시작, GMT 기준 시간으로 설정 됨
const date1 = new Date(2022, 11, 27, 18, 30, 50);
console.log(date1);

// 원하는 달로 입력 됨
const date2 = new Date("2022-12-25/18:30:50");
console.log(date2);

// Date 객체의 메소드
let myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth()); // 현재 월 출력 (인덱스번호가 출력 : 0부터 시작)
console.log(myDate.getDate()); // 현재 날짜 출력
console.log(myDate.getDay()); // 현재 요일 출력 (인덱스번호가 출력 : 0이 일요일)
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); //현재 초 출력 
console.log(myDate.getTime()); // 1970년 1월 1일 0시 0분 부터 지금까지의 경과시간

// Map 객체 : 자바스크립트에서 제공하는 데이터 구조 중 하나로 key-value쌍으로 데이터를 저장 및 관리
// Map은 객체와 유사하지만 객체와는 다르게 키에 다양한 자료형을 사용 할 수 있습니다.
let map = new Map();
map.set("name", "연주");
map.set("email", "yeonjoo@yeonjoo.com");
map.set("addr", "서울시 강남구");

console.log(map.size);
console.log(map.get("name"));
console.log(map.get("email"));
console.log("---------------------------");

map.forEach((item) => {
    console.log(item);
});

// 수항 연산을 다루는 Math 객체 (자바랑 같음)
console.log(Math.abs(-5)); // 출력 : 5
console.log(Math.ceil(1.1)); // 출력 : 2
console.log(Math.floor(1.9)); // 출력 : 1
console.log(Math.round(1.4)); // 출력 : 1
console.log(Math.max(1, 2, 3)); // 출력 : 3
console.log(Math.min(1, 2, 3)); // 출력 : 1
console.log(Math.pow(2, 3)); // 출력 : 8
console.log(Math.sqrt(9)); // 출력 : 3, 제곱근 반환
console.log(Math.random()); // 출력 : 0 이상 1 미만의 임의의 수

// Math.random() : 0 보다 크고 1보다 작은 임의의 숫자형 값을 반환
let ran = Math.floor(Math.random() * 10); // 0~9 사이의 정수값을 반환
console.log(ran);

let ran2 = parseInt((Math.random() * 10) + 1);
console.log(ran2);




