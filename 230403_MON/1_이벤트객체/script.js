
// 마우스에 대한 버튼 이벤트

const btnE1 = document.querySelector("button");
btnE1.addEventListener("click", function(e) {
    console.log("버튼이 눌러졌습니다." + e);
    // console.log("X좌표 : " + e.clientX);
    // console.log("Y좌표 : " + e.clientY);
    // console.log("마우스가 클릭된 x좌표 : " + e.pageX);
    // console.log("마우스가 클릭된 y좌표 : " + e.pageY);
    // console.log("모니터 왼쪽 모서리 기준으로 마우스가 클릭된 x축 좌표 : " + e.screenX);
    // console.log("모니터 왼쪽 모서리 기준으로 마우스가 클릭된 y축 좌표 : " + e.screenY);
});


// 키보드에 대한 input 이벤트 (예를들어 자바에서 특정 알파벳의 아스키 코드가 들어왔을 때 멈추게하는 이벤트를 주는 것에 쓰일 수 있음)
const inputE1 = document.querySelector("input");
inputE1.addEventListener("keydown", function(event) { // function() : 함수에 넣어줄 이벤트(이벤트는 이미 그 앞에 발생)를 사용하겠다는 매개변수를 전달할 떄 이름으로 지정
    console.log(`keyCode : ${event.keyCode}`);
    console.log(`ctrlKey : ${event.ctrlKey}`);
    console.log(`altKey : ${event.altKey}`);
    console.log(`shiftKey : ${event.shiftKey}`);

});

// 이벤트 취소하기 : HTML 태그 중 일부는 기본으로 이벤트가 적용되어 있음. 
// 대표적으로 a태그와 form태그가 해당 됨
// target 속성은 이벤트가 발생한 요소를 나타 냄(리액트에서 확인 할 예정
// preventDefualt() : 태그에 기본으로 연결된 이벤트를 취소

const aEls = document.querySelectorAll("a");
for(let e of aEls) {
    e.addEventListener("click", function(e){
        // 기본 이벤트 취소
        e.preventDefault(); // 눌렀을 때 a태그가 작동안해서 주소로 이동하지 않음
    });
}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
    // 기본 이벤트 취소
    e.preventDefault(); // 제출을 눌렀을 때 input창에 쓰여있던 글씨가 사라지는걸 막는 것

});
