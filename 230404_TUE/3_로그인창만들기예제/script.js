// 아이디 체크
const id = document.getElementById("idInput").value;
const regexId = /^[a-z]+[a-z0-9]{8,20}$/g;
let idCheck1 = regexId.test(id);
// 비밀번호 체크
const pw = document.getElementById("pwInput").value;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
let pwCheck1 = regexPw.test(pw);
//이메일 체크
const email = document.getElementById("emailInput").value;
const regexEmail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
let emailCheck1 = regexEmail.test(email);
// 전화번호 체크
const tel = document.getElementById("telInput").value;
const regexTel = /\d{3}-\d{4}-\d{4}$/;
let telCheck1 = regexTel.test(tel);

function idCheck() {
    if(idCheck1 === true) {
        document.getElementById("idWarn").innerHTML = "아이디 좋아요";
    } else {document.getElementById("idWarn").innerHTML = "아이디 다시확인하세용";}

    console.log(idCheck1);
}

function pwCheck() {
    if(pwCheck1 === true) {
        document.getElementById("pwWarn").innerHTML = "비밀번호 좋아요";
    } else {document.getElementById("pwWarn").innerHTML = "비밀번호 다시 확인!"};
}

function emailCheck() {
    if(emailCheck1 === true) {
        document.getElementById("emailWarn").innerHTML = "이메일도 좋아요";
    } else {
        document.getElementById("emailWarn").innerHTML = "이메일 확인하세용";
    }
    console.log(emailCheck);
}

function telCheck() {
    if(telCheck1 === true) {
        document.getElementById("telWarn").innerHTML = "전화번호까지 완벽";
    } else {
        document.getElementById("telWarn").innerHTML = "휴,,,, 전화번호 다시확인하세요!";
    }
    console.log(telCheck1);
}

function signIn() {
    let color = document.querySelector(".checkBtn");

    if(idCheck1 === true && pwCheck1 === true && emailCheck1 === true && telCheck1 === true)
    {
        color.style.background = "red";
    }
}