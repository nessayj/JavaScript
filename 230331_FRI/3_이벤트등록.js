// 이벤트 등록하기 : 이벤트가 발생할 때 어떤 작업을 할 것인지 자바 스크립트 코드로 작성하는 것

// 인라인방식
function clickEvent() {
    // 인터넷 내에서의 경고창이 뜸
    alert("인라인 방식으로 구현된 함수가 호출 되었습니다.");
}

function focusEvent() {
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background = "orange";
}

function blurEvent() {
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background = "green";
}

// 프로퍼티 리스너 방식
// 함수로 구현하지 않고 id값으로 호출
const btnEl = document.getElementById("prt_btn");
btnEl.onclick = () => alert("프로퍼티 리스너 방식으로 구현된 함수 호출");

// 이벤트 등록 메소드로 이벤트 등록하기
// <노드>.addEventListener("이벤트타입", 함수());
let regBtnEl = document.getElementById("reg_btn");
// 일반적인 이벤트 등록 메소드(익명의 함수)
// regBtnEl.addEventListener("click", function() {
//     // 이곳이 구현부
//     alert("이벤트 등록 메소드로 구현된 함수 호출");
// });


// 함수 자체를 외부에서 불러줄 수 있음(=call back); 함수 이름이 변수처럼 활용되어 외부에서 불러줌
regBtnEl.addEventListener("click", EventFunc);

function EventFunc() {
    alert("이벤트 등록 메소드로 구현된 함수 호출");
}
