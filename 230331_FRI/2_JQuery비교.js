// let colorBtn = document.getElementById("colorButton");
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "pink"];
// let colorInx = 0;



// // html에 onclick을 넣어주는 것보다 addEventListener을 사용하는게 더 좋음
// colorBtn.addEventListener("click", function() {
//     document.body.style.background = colors[colorInx];
//     colorInx = (colorInx + 1) % colors.length; // 색깔이 계속 바뀔 수 있도록 인덱스 값을 바뀌게 하기위하여
// });



// JQuery 사용
$(document).ready(function() {
    let colorBtn = document.getElementById("colorButton");
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "pink"];
    let colorInx = 0;
    
    $("#colorButton").click(function() {
        $("body").css("background-color", colors[colorInx]);
        colorInx = (colorInx + 1) % colors.length;
    });
}); 