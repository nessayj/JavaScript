let tmp = prompt("숫자를 입력 하세요 : ", "");
let num = Number(tmp) // 자료형을 숫자로 바꿔줌
if(num >= 0) {
    document.write(`<h2> ${num} 은 양수 입니다.`);
} else {
    document.write(`<h2> ${num} 은 음수 입니다.`);
}