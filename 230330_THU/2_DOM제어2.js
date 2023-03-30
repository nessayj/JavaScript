// -------------------------------------------------
// 클래스 속성 조작하기
// const el = document.querySelector("#text");
// // classList : 선택한 요소 노드의 class 속성을 지정할 때 사용(add(), remove())
// el.classList.add("active", "blue-color"); // class 속성 추가
// el.classList.remove("active"); // class 속성 제거

// 메소드 속성으로 조작하기 : 모든 속성을 전체적으로 변경
// .getAttibut("속성명") : 속상값을 가지고 옴
// .setAttribute("속성명", "속성값"); // 속상값을 설정
// .remobeAttritbuut("속성명") : 속성을 삭제

const aEl = document.querySelector("a"); // a태그를 선택
const href = aEl.getAttribute("href");
console.log(href);
aEl.setAttribute("href", "http://kakao.com");
aEl.innerText = "카카오";
