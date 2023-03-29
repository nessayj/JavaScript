// 응모자 수를 입력 받아 당첨자를 발표하는 프로그램 작성
// 응모자 수 : 30명 (input 창으로 입력 받기)
// 당첨자 발표 : 응모자 수 사이에서 당첨자를 선택(랜덤함수)해 발표

function pick() {
    let howMany = document.getElementById("number").value;
    let picked = parseInt((Math.random() * howMany) + 1);
    
    
    document.getElementById("howMany").innerHTML = howMany;
    document.getElementById("picked").innerHTML = picked;
}