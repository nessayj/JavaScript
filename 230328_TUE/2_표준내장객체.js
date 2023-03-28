// 문자열의 길이 체크 : length
const pw ="123";
if(pw.length < 4) {
    console.log("비밀번호는 최소 4자리 이상 입력해주세요.");
}

// 특정 문자열 포함 여부 확인 : includes
const email = "test!gmail.com";
if(email.includes("@") === false) {
    console.log("올바른 이메일 형식이 아닙니다.");
}


// indexOf : 특정 문자열이 들어있는지 확인 
const email2 = "@test!gmail.com";
if(email2.indexOf("@") === -1) { // indexOf의 default 값이 0이기때문에 -1을 넣어주는 것(-1이 false)
    console.log("올바른 이메일 형식이 아닙니다.");
}

// lastIndexOf : 찾고자하는 문자열이 둘 이상 발견 되면 제일 마지막에 위치한 문자열의 index를 반환
const email3 = "@test123@gmail.com@";
console.log(email3.lastIndexOf("@"));

// slice() : 시작위치와 종료위치를 주면 문자열에서 해당 부분을 잘라내서 반환(음수값 허용)
let str = "Apple, Banana, Kiwi";
// let res = str.slice(7, 13);
// console.log(res); // 반환하는 문자열이 새롭게 만들어 진 것 
console.log(str.slice(7, 13)); // 불변성의 원칙 : 원본을 손상시키지 않음(잘라낸것처럼 보이지만 잘라지지않음)
console.log(str.slice(7, -1)); // 끝에서 -1해서 출력
console.log(str);

// substring() : 시작위치와 종료위치를 주면 문자열에서 해당 부분을 잘라내서 반환
let str2 = "Apple, Banana, Kiwi";
let res2 = str2.substring(7, 13);
let res3 = str2.substring(7, -1); // 7에서 -1해서 출력 (인덱스 값 : 0~6); substirng은 - 값을 허용하지 않음
console.log(res2);
console.log(res3);

// replace() : 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수 (같은문자열이 여러개가있을때는 첫음으로 나오는 문자열이 바뀜)
let str7 = "연주의대모험, 연주, 찡찡, 마루, 재롱, 연주";
let newstr = str7.replace("찡찡", "쫑쫑");
console.log(newstr);

// replaceAll() : 문자열 내의 특정 문자열을 지정한 문자열 모두를 바꾸는 함수
let newstr2 = str7.replaceAll("연주", "욘듀");
console.log(newstr2);

// toUpperCase() : 모든 문자를 대문자로
// toLowerCase() : 모든 문자를 소문자로
let alpha = "Better late than never.";
console.log(alpha.toUpperCase());
console.log(alpha.toLowerCase());

// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
// 기존 문자열을 변경하지 않고 합쳐진 새로운 문자열을 생성(불변성)
// + 연산자도 문자열결합에 쓰지만 문자열 변경이 있을 수 있기 때문에 concat사용을 권장
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// trim() : 문자열의 앞, 뒤 공백을 제거
let str10 = " Hello Java Yeon Joo ";
console.log(str10.trim());

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 길이 만큼 추가하는 함수
let str11 = "5";
str11 = str11.padStart(5, 0); // 앞의 수(5)는 문자열의 총 길이 수; 총 길이 수가 되도록 맞춰서 뒤의 수(0)으로 앞에서부터 채워짐
console.log(str11);

let str12="5";
str12 = str12.padEnd(4, 0);
console.log(str12); // 위의 것과 원리는 같지만 end는 뒤에서 부터 채워짐

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
let addr = "서울시 강남구 역삼동 KH정보교육원";
console.log(addr.charAt(5));

// charCodeAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드를 반환
let uniCode = "HELLO WORLD";
console.log(uniCode.charCodeAt(0)); // H의 ASCII CODE 값이 반환

// split() : 특정문자열 기준으로 문자열을 잘라서 새로운 문자열로 이루어진 배열생성
let birthDay = "1990-03-17";
let arr2 = birthDay.split("-");
console.log(arr2);


