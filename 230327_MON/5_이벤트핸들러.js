// 이벤트핸들러에서 콜백함수 사용하기
// 방법 1
// let btn = document.querySelector("#myButton");
// btn.addEventListener('click', function() {
//     console.log("Button이 눌러 졌습니다.");
// })


// 방법 2
// let btn = document.querySelector("#myButton");
// btn.addEventListener('click', callBtn);

// function callBtn() {
//     console.log("Button이 눌러 졌습니다.")
// }

// 클로저 : 자바의 getter/setter 개념
// 함수가 해당 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
// count 변수는 makeCounter() 함수 내에서 정의 되어있지만, 함수 외부에서 접근 가능
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter();
counter();
counter();