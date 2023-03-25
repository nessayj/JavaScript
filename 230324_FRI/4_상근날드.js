let menu =[]; // 빈 배열 생성
let price;

menu = prompt("치즈버거의 가격을 입력하세요 : ", "");
menu[0] = Number(price);
menu = prompt("와퍼주니어의 가격을 입력하세요 : ", "");
menu[1] = Number(price);
menu = prompt("와퍼클래식의 가격을 입력하세요 : ", "");
menu[2] = Number(price);
menu = prompt("제로콜라의 가격을 입력하세요 : ", "");
menu[3] = Number(price);
menu = prompt("제로사이다의 가격을 입력하세요 : ", "");
menu[4] = Number(price);

let minBur = menu[0]; // 비교 시작값
let minDrink = menu[3];


for(let i=0; i < menu.length; i++) {
    if(i<3 && minBur > menu[i]) minBur = menu[i];
    if(i>2 && minDrink > menu[i]) minDrink = menu[i];   
}

document.getElementById("value").innerHTML = (minDrink + minBur - 50) + "원";


