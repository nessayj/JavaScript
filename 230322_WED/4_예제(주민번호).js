// 길이 체크, 하이픈이 있는지 체크해서 하이픈이 없으면 재 입력 요구 하도록
// 성별 확인 123456-1234567
// 문자열에서 해당 문자 추출은 charAt(n)
// 문자열 잘라내기 substring(0,2) 0부터 2미만까지 잘라냄
// 날짜 객체를 만드는 방법도 자바와 동일 const date = new Date();
// 날자 객체에서 현재 년도 가져오기 : date.getFullYear();
// 현재년도 - 태어난년도 = 나이

let jumin;

while(true) {
    jumin = prompt("주민등록번호 : ","");
    if(jumin.length !=14) alert("입력오류 : 다시 입력하세요");
    else {
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다");
        else break;
    }
}
// 남성/여성
let gender = jumin.charAt(7); // 문자열에서 해당 인덱스의 문자 추출 (성별자리)
let prnGender; // 화면에 성별을 출력하기 위한 문자열
if(gender === "1" || gender ==="3") prnGender = "남성"; // 타입을 가지고 쓰려면 =을 3개 써야함
else prnGender = "여성";

// 나이를 계산하기 위해 주민번호에서 연도 추출
let birthYear = jumin.substring(0,2); // 0번 인덱스에서 2미만까지 잘라냄 (0에서 1번 인덱스의 값 추출)
if(gender === "1" || gender === "2") {
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear;

// 문자타입을 숫자 타입으로 변경
birthYear = Number(birthYear);

// 현재 날짜 가져오기
// 변수로 쓸 것 같으면 let 변하지 않을 값인것같으면 cosnt
const date = new Date(); //날짜 객체에서 현재 시간 정보 읽어오기
const currYear = date.getFullYear(); //2023
let age = currYear - birthYear; // 나이를 구함

document.write(`<p class='box'> 성별 : ${prnGender} <br> 나이 : ${age}세 </p>`) ; // 큰따옴표 두개를 넣으면 구간이 두개가 되니 작은따옴표로 넣어줘야함
