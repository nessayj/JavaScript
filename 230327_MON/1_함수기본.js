// 함수 선언문 : function 키워드로 선언하며 함수이름을 가짐
// 호이스팅의 영향을 받음
// 호이스팅 : 함수나 변수가 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말함
// 호이스팅의 영향을 받는다는 건 함수가 선언된 위치에 상관없이 호출하여 실행할 수 있음

// 변수 및 데이터 형을 붙이지 않고 return해줘도 됨
// let sum1 = sum(21, 24); 이렇게 위로 올려도 계산이 됨 : 호이스팅
// let sum2 = sum(100, 200);

function sum(p1, p2) {
    let sum = p1 + p2;
    return sum;
    // 위의 두개를 합쳐서 return = p1 + p2; 이렇게 해줘도 됨
}

let sum1 = sum(21, 24);
let sum2 = sum(100, 200);

console.log(sum1, sum2);


// ------------------------------------------------------------------------------------------------------------
// 함수와 switch 문 사용

console.log("덧셈 : " + calculator(10, 20, "+"));
console.log("뺄셈 : " + calculator(10, 20, "-"));
console.log("곱셈 : " + calculator(10, 20, "*"));
console.log("나눗셈 : " + calculator(10, 20, "/"));

function calculator (n1, n2, op){
    switch(op) {
        case "+" : return add(n1, n2); // add함수의 결과 값이 반환 됨
        case "-" : return sub(n1, n2);
        case "*" : return mul(n1, n2);
        case "/" : return div(n1, n2);
    }
}
// 위의 값이 내려가기 떄문에 굳이 변수가 같지않아도 됨
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
