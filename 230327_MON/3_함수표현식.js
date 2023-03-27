// 함수 표현식은 변수에 함수를 할당해서 사용하는 방식
// 함수 표현식은 변수에 할당하는 함수에 식별자가 있으면 네이밍함수, 없으면 익명함수라고 구분
// 호이스팅이 적용되지 않음
// const 변수명 = function() {}

const gugudan = function() {
    for(let i = 1; i < 10; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}

console.log(gugudan); // 함수를 대입받은 변수이기 때문에 gugudan은 함수
console.log(gugudan());
gugudan();

//-------------------------------------------------------------------------------
// 화살표 함수로 정의하기
// 화살표 함수는 ES6에서 추가된 새로운 함수 선언 방식이며, 함수 선언식 보다 간결하고 가독성이 좋음

const hi = function() {
    return "안녕반가워~ 나대신 여기 앉아있어줄래?";
}
console.log(hi());


const hi2 = () => "안녕반가워~ 나 집에 좀 가게해줘";
console.log(hi2());

// 화살표 함수에서 매개변수 정의
const sum = num1 => console.log(num1 * 100);
sum(100);

// 매개변수 두개 넣기
const sum2 = (num1, num2) => console.log(num1 * num2);
sum2(10, 20);

// 기본 값 할당 : 디폴트 매개변수 값을 주는 방법
// function sum3(a = 10, b = 20) {
//     console.log(a, b);
// }
// js에서는 변수에 값을 넣어주지 않고 변수 선언만 해도 에러가 나지않고 undefined로만 찍힘(주의해야 함)

const sum3 = (a = 10, b = 20, c) => console.log(a,b,c);
sum3();

// return 문 : 함수 외부로 결과를 반환할 떄 사용

console.log(sum4()); // sum4() 괄호안에 하나만 넣었을 때는 첫 번째 변수 값만 들어가고 두번 째 변수값은 기본값이 그대로 출력
function sum4(a = 10, b = 20) { // 앞에 변수가 없으면 함수선언식(호이스팅가능)
    return a + b;
} 

const sum5 = (num1, num2) => num1 + num2; // 결과가 sum5에 대입되기때문에 return문이 따로 필요 없음
console.log("결과 : " + sum5(100, 200));

// ---------------------------------------------------------------------------------
// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인정
// let a = 10; // 함수 바깥에 선언했기 때문에 전역범위 밖이든 안이든 사용가능
// function sum7() {
//     console.log(`함수 내부 : ${a}`);
// }
// sum7();
// console.log(`함수 외부 : ${a}`);

// function sum8() {
//     let b = 10;
//     console.log(`함수 내부 : ${b}`);
// }
// sum8();
// console.log(`함수 외부 : ${b}`);


// 블록 스코프 : {}로 구성된 블록문 기준으로 스코프의 유효 범위(let, const는 이 범위를 따름)
// let c = 10;
// {
//     let d = 20;
//     console.log(`코드 블록 내부 c : ${c}`);
//     console.log(`코드 블록 내부 d : ${d}`);
// }

// console.log(`코드 블록 외부 c : ${c}`);
// console.log(`코드 블록 외부 d : ${d}`);

// var 키워드 : 블록 스코프를 따르지 않고 호이스팅이 발생 함
var e = 10;
{
    var f = 20;
    console.log(`코드 블록 내부 e : ${e}`);
    console.log(`코드 블록 내부 f : ${f}`);
}

console.log(`코드 블록 외부 e : ${e}`);
console.log(`코드 블록 외부 f : ${f}`);

// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행하는 것을 의미
/* 
(function() {

})(); 
*/
(function() {
    let message = "Hallo";
    console.log(message);
})();

// callback 함수 : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행될 때 호출되는 함수를 의미
// 비동기적인 작업을 처리할 때 많이 사용
// 함수 이름 넘기기
function cry() {
    console.log("cry");
}
function sing() {
    console.log("sing");
}
function dance() {
    console.log("dance");
}
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
checkMood("good");
checkMood("sad");

// 위의 식을 콜백함수로 만들기 (매개변수자리에 함수가 들어 감)
function checkMoodCallback(mood, goodCall, badCall) { 
    // 변수가 함수 그 자체이기 때문에 내가 값을 지정해주면 그 해당하는 값이 출력
    if(mood === "good") goodCall();
    else badCall();
}
checkMoodCallback("good", dance, cry);
checkMoodCallback("Not bad", dance, sing);

// 타이머 설정과 Callback 함수
function buyTobe(item, price, quantity, callback) {
    console.log(item + "상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    setTimeout(function() { // 첫번째 인자로 실행할 코드를 담고, 두번째 인자로 지연시간; 지연시간동안 대기 후 내부에 있는 코드 출력
        console.log("계산이 필요합니다.");
        let total = price * quantity;
        callback(total);
    }, 2000);
}

function pay(n) {
    console.log("지불 할 금액은 : " + n + "입니다. ");
}

buyTobe("\'밤고구마 맛있어용\'", 1000, 5, pay);
console.log("실행 우선 순위 테스트 ....1");
console.log("실행 우선 순위 테스트 ....2");
console.log("실행 우선 순위 테스트 ....3");
console.log("실행 우선 순위 테스트 ....4");
console.log("실행 우선 순위 테스트 ....5");
