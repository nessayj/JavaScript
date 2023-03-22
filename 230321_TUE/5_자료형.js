let string = "Hello, JavaScript";
console.log(string);

let string2 = "집에가고싶어요~ 정말이에요~";
console.log(string2);

let string3 = '저는 "여기에 갇혀있어요 ㅎ" 헬프...헬.....ㅍ.....ㅡ';
console.log(string3);

let name1 = "제이름은 연주랍니다";
let string4 = `저는 ${name1} 힣.`;
console.log(string4);

let addr = "우리집 주소는 비밀~";
let name2 = "내이름은 비밀~";
console.log("이름이 뭐에요~ " + name2 + " 주소는 뭐에요~ " + addr);

let 인사말 = "ㅎ2 \ '나는 ㅎ\' ㅏ..";
console.log(인사말);

let string5 ="\n\n\n이스케이프 문자를 이용해서 줄 바꿈입니당";
console.log(string5);

//ES6에서 추가 된 템플릿 문자열 사용하기
let dan = 3;
let gugu = 8;
let rst = `${dan} 곱하기 ${gugu}는/은 ${dan*gugu}입니돵`
console.log(rst);

// 숫자형(Number) : 자바스크립트는 정수와 실수를 구분하지 않고 전부 하나의 숫자 자료형으로 취급
let num1 = 10;
let num2 = 0.1;
console.log(num1 + num2);
console.log(num2);

let sum = 0.1 + 0.2;
console.log(sum); // 실수계산은 근사치 계산을 하기 때문에 최대히 가까운 값으로 출력

// toString() : 숫자형 데이터를 문자형 데이터로 변환해주는 함수
let x = 123;
x.toString();
console.log(x);

// 논리형 : 참과 거짓을 구분 (true / false)
let age = 20;

let isAdult = (age > 18) ? true : false;
console.log(isAdult);
//if(isAdult) console.log("성인");
//else console.log("미셩년자");

// undefined : 변수와 상수를 선언하면 생성한 저장공간에 데이터를 할당하는 것이 일반적이지만
// 여기서는 할당이 되지 않으면 임시적으로 undefined 상태를 만듬
let empty;
console.log(empty);

console.log(empty2);
var empty2 = 10; 
// 만약 위에 console.log(empty2)가 맨위로 혼자 올라가게되면 에러가나서 모든 결과값이 나지 않음 하지만 밑에서 var empty2 =10; 값을 넣어주면 맨 위로 올라가서 작동되게 함 = 호이스팅

//null : 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워 둘 때 할당
let empty3 = null;
console.log(empty3);
// undefined 와 null은 특수 자료형