const pEls = document.querySelectorAll("p");

// for(let el of pEls)와 같은 문법
// 이미 만들어진 배열을 순회 해서 값만 출력하는 용도로 사용
// forEach는 기존 값을 건들이지 않음
// this를 사용할 떄는 익명의 함수를 사용하는 것과 화살표함수의 결과가 달라짐
// pEls.forEach((el) => { // el 순회하는 요소
//     el.addEventListener("click", function() {
//         if(this.style.color == "red") {// 여기서 this는 현재 p태그 내에서 눌러진 애가 this가 됨
//             this.style.color = "black";       
//         } else { 
//             this.style.color = "red";
//         }
//     })
// });


// 화살표 함수
pEls.forEach((el) => {  
    el.addEventListener("click", ()=> { // 여기서 this는 값이 지정이 안되어있기 때문에 바인딩 된것이 무엇인지 몰라 undefined
        if(this.style.color == "red") {
            this.style.color = "black";       
        } else { 
            this.style.color = "red";
        }
    })
}); // 화살표 함수를 쓰려면 this대신에 요소이름인 el을 넣어줘야 함 => this.style.color 대신에 el.style.color이렇게


