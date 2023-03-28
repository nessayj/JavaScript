
// function genLotto() {
//     const numbers = [];
//     const container = document.getElementById("container");
//     container.innerHTML = ""; // 컨테이너에 있던 애들을(번호생성을 새로 해주기위해) 한 번 지우고 다시시작하기위해 넣어줌

//     while (numbers.length < 6) {
//         const number = Math.floor(Math.random() *45) + 1;
//         if(!numbers.includes(number)) {
//             numbers.push(number); // 빈배열에 넣어줌(자바의 que처럼 사용); 뒤로 계속 추가 됨
//         }
//     }
// // 향상된 포문
//     for(let num of numbers) { // 배열의 이름을 넣으면 각각의 요소를 넣어줌
//         const div = document.createElement('div'); // div 태그를 생성
//         div.classList.add('number'); // 만들어진 div태그에 스타일을 추가
//         div.textContent = num; // div 태그안에 값을 넣어줌
//         container.appendChild(div); // div태그를 부모요소에 넣어줌       
//     }
// };

const genBtn = document.getElementById("genBtn");
genBtn.addEventListener("click", genLotto);

function genLotto() {
    const numbers = [];
    const container = document.getElementById("container");
		container.innerHTML = "";

    while (numbers.length < 6) {
        const number = Math.floor(Math.random() * 45) + 1;
        if(!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    for(let num of numbers) {
        const div = document.createElement('div');
        div.classList.add('number');
        div.textContent = num;
        container.appendChild(div);
    }
}