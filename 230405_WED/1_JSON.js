// JSON(JavaScript Object Notation)은 자바스크립트 객체를 문자열로 표현하는 데이터 포멧
// JSON을 사용하면 객체를 직렬화 할 수 있음
// 원래는 자바스크립트 언어로 부터 파생되었지만 현재는 언어에 독립적으로 사용
// 두가지 기본 자료구조인 객체와 배열을 기반하며, 웹서버와 웹 어플리케이션 간의 데이터 교환에 사용
// XML의 대안으로 자주 사용


// // 객체 리터럴
// const person = {
//     name : "연주다",
//     age : 100,
//     addr : "별나라에 살아용"
// }

// // JSON
// { "name" : "연주다", "age" : 100, "addr" : "별나라에 살아용"}


// 해당 데이터의 입력은 주로 ajax, Fetch API, Promise, Axios 등의 비동기통신으로 부터 전달 받음
const jsonString = '{"name": "연주", "age": 100, "city": "별나라"}';
const jsonObject = JSON.parse(jsonString); // JSON => 객체 리터럴로 반환
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);

// 자바스크립트 객체를 JSON문자열로 변환하기
let memberInfo = [
    {
        name : "연주좡",
        age : 101,
        job : "King",
        addr : "달나라 별나라"
    },
    {
        name : "째롱이",
        age : 12,
        job : "귀염둥이",
        addr : "달나라 별나라"
    },
    {
        name : "또또",
        age : 10,
        job : "기여워요",
        addr : "달나라 별나라"
    }
];
let json = JSON.stringify(memberInfo);
console.log(json);


