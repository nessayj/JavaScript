// 폼 요소의 시작은 항상 form태그
// 폼 요소는 input, select, button태그 등
// 폼 요소를 선택할 때는 elements속성이나 name속성을 사용
// document.frm.id.value = "연주다";
// document.frm.pw.value = "a12345";

function inputCall() {
    let id = document.frm.id.value;
    // console.log(id);
    let pwd = document.frm.pw.value;
    // console.log(pwd);
    let desc = document.frm.desc.value;
    // console.log(desc);
}

// 체크 박스 다루기 : 체크박스도 value 속성으로 값을 가져 올 수 있음
// const checkEl = document.querySelectorAll("[type='checkbox']"); 
// for(let e of checkEl) {
//     e.checked = true; // default : 모든 체크박스가 체크되어있음
//     // e.checked = false;
//     console.log(e.value);
// }

// for(let e of checkEl) {
//     // if(e.value === "orange") e.checked = true; // 해당하는 값만 체크
//     if(e.value !== "orange") e.checked = true; // orange빼고 다 체크
// }

// 라디오
// const checkEl = document.querySelectorAll("[type='radio']"); 
// for(let e of checkEl) {
//     // if(e.value === "orange") e.checked = true; // 해당하는 값만 체크
//     if(e.value !== "orange") e.checked = true; // melon이 체크
// }

// 콤보 박스 다루기
const optionEl = document.querySelectorAll("option");
for(let e of optionEl) {
    if(e.value === "banana")
    e.selected = true;
} 

// 파일 업로드 
// 특정 시점에 호출을 위해서는 function을 이용해야 함
function upload() {
    const filePath = document.frm.upload.files;
    console.log(filePath);
}
