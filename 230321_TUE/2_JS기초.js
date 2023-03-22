let currentYear = 2023;
let birthYear;
let age;

birthYear =prompt("태어난 연도를 입력하세요 : (YYYY)", "");
age =  currentYear - birthYear;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년의 사람의 나이는 " + age + "세 입니다.");

// 제일 큰 수 제일 작은 수 구하기
let num1;
let num2;
let num3;
let minNum;
let maxNum;

num1 = promp ("첫 번째 수 : ", "");
num2 = promp ("두 번째 수 : ", "");
num3 = promp ("세 번째 수 : ", "");

if ( num1 > num2 ) {
    if(num1 > num3) maxNum = num1;
    else max = num3;
} else {
    if(num2 > num3) maxNum = num2;
    else max = num3;
}
if(num1 > num2) {
    if(num2 > num3) minNum = num3;
    else nimNum = num2;
} else {
    if(num1 > num3) minNum = num3;
    else minNum = num1;
}

document.write("<h3> 제일 큰 값 : " + maxNum + "</h3><br>");
document.write("<h3> 제일 작은 값 : " + minNum + "</h3>");
