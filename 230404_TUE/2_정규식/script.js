// 정규표현식(regular expression) : 문자열에 포함 된 특정 문자 조합을 찾기 위해 사용되는 패턴
// const regexp = /World/;
// const regexp = new RegExp("World"); : 객체로 만드는 방법

let str = "Hello World! World!";
const re = /World/;
console.log(re.test(str)); // 해당 문자열의 포함여부를 확인
console.log(str.search(re)); // 해당 문자열의 시작위치 인덱스 반환

// exec() 메소드 : 인수로 전달된 문자열에서 특정 패턴을 검색하여, 패턴과 일치하는 문자열 반환
// 만약, 패턴과 일치하는 문자열이 없을 경우에는 null을 반환
let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstRst = /가장+/.exec(targetStr); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst = /가장큰+/.exec(targetStr); 
console.log(firstRst);
console.log(secondRst);

// test() 메소드 : 인수로 전달 된 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검사
// 문자열이 있으면 : true 문자열이 없으면 : false
let targetStr1 = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstRst1 = /가장+/.test(targetStr1); 
let secondRst1 = /가장큰+/.test(targetStr1); 
console.log(firstRst1);
console.log(secondRst1);

// 전화번호 검사하기
// \d : 숫자를 의미
// {} : 괄호안의 숫자는 개수를 의미
let inputNum = "010-1234-5678";
const regex = /\d{3}-\d{4}-\d{4}$/; // 마지막에 $를 넣어줘야 마지막 4자리라는걸의미
let rst = regex.test(inputNum);
console.log(rst); 

// 전화 번호 추출하기 : match()사용; 주어진 문자열의 처음부터 패턴 매칭을 수행
const inputText = "안녕하세요. 제 번호는 010-1234-5678 입니다. 연락 주세요.";
const regex1 = /\d{3}-\d{4}-\d{4}/;
let regNumber = inputText.match(regex1);
console.log(regNumber); // regNumber[0]으로 찍으면 번호만 넘어옴
// 그냥 regNumber로 찍으면 배열의 형태로 다 나옴

// 전화번호 여러개 추출하기 : (g)옵션 사용
// \d{2,3} : 숫자 2 ~ 3개로 시작
// g : 매칭되는 모든 항목 찾기
const inputText1 = "안녕하세요. 제 번호는 010-1234-5678 031-123-4567 입니다.";
const regex2 = /\d{2,3}-\d{3,4}-\d{4}/g; // 패턴넣고 마지막에 g
let regNumber1 = inputText1.match(regex2);
console.log(regNumber1);
console.log(regNumber1[0]);
console.log(regNumber1[1]);
for(let num of regNumber1) {
    console.log(num);
}

// 정규식 중 패턴에 대한 사용 예제
const inputText2 = "안녕하세요. 제 번호는 010-1234-5678 031-123-4567 입니다.";
const regex3 = /오늘의/; // 단순 글자 찾기
const regex4 = /010/g; // 모두 찾기
const regex5 = /[a-zA-Z]/; // 모든 알파벳 대소문자 찾기
const regex6 = /[^0-9]/g; // 숫자가 아닌 것 모두 찾기
const regex7 = /[ㄱ-ㅎ가-힣]/g; // 한글 모두 찾기
let rst2 = inputText2.match(regex7);
console.log(rst2);

// 웹 사이트 주소 정규식 검사
// http:// 나 http://로 시작하고, 알파벳, 언더스코어(_), 하이픈(-), dot(.)으로 이루어져 있음
// /http?: \/\/[\w\-\.]+/g
const text = "구입문의는 : http://yeonjoo.com https://yeonjoo.com 010-1234-5678 입니다.";
const regex8 = /https?:\/\/[\w\-\.]+/g; // s?는 s가 있어도 되고 없어도되고 둘 다 확인하기위해 넣어줌
let rst3 = text.match(regex8);
console.log(rst3);