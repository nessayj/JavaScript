function greenBtn() {
    square.style.background = "green";
}

// 프로퍼티
let orangeBtn = document.getElementById("orange");

orangeBtn.onclick = ()=>{
    square.style.background = "orange";
}

// orangeBtn.addEventListener("click", orangeClick);

// function orangeClick() {
//     square.style.background = "orange";
// }

let purpleBtn = document.getElementById("purple");
purpleBtn.addEventListener("click", purpleClick);

function purpleClick() {
    square.style.background = "purple";
}