// 노드 추가 / 삭제 하기 : DOM트리에 새로운 노드를 생성하고, 기존 DOM트리에 연결

// createElement() : 요소 노드 생성
// const aEl = document.createElement("div");
// // <기준노드>.appendChild(추가 할 자식노드) : body<기준노드>에 달아 줌 / appendChild : body태그에 자식으로 넣어줌
// document.body.appendChild(aEl); 
// aEl.innerText = "Test";



// --예제--
// div 태그 생성 후 하위에 메뉴 리스트 추가하기(5개이상) (ul과 li 태그를 사용)
// 메뉴 리스트
// - 돈가스
// - 오므라이스
// - 짜장면
// - 짬뽕
// - 초밥

let menuList = document.createElement("ul");
let menuItem1 = document.createElement("li");
let menuItem2 = document.createElement("li");
let menuItem3 = document.createElement("li");
let menuItem4 = document.createElement("li");
let menuItem5 = document.createElement("li");

menuList.innerText = "메뉴판";
menuItem1.innerText = "돈까스";
menuItem2.innerText = "오므라이스";
menuItem3.innerText = "짜장면";
menuItem4.innerText = "짬뽕";
menuItem5.innerText = "초밥";

let menu = document.querySelector("#menu");
menu.appendChild(menuList);
menuList.appendChild(menuItem1);
menuList.appendChild(menuItem2);
menuList.appendChild(menuItem3);
menuList.appendChild(menuItem4);
menuList.appendChild(menuItem5);

function deleteMenu() {
    // let menuEl = document.querySelector("#menu");
    // menuEl.innerHTML = ""; // removechild를 사용하지 않고 삭제
    menuList.removeChild(menuItem1);
    menuList.removeChild(menuItem2);
    menuList.removeChild(menuItem3);
    menuList.removeChild(menuItem4);
    menuList.removeChild(menuItem5);
}