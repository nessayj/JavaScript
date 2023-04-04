// 메뉴는 [1]예매하기, [2]종료하기
// 사용자로부터 좌석번호(index)를 입력 받아 예매하는 시스템 (좌석은 10개)
// [v] [v] [v] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
// 예매가 완료되면 해당 좌석 값을 1로 변경
// 이미 예매가 완료된 좌석은 재구매 불가
// 한 좌석당 예매 가격은 12000원
// 프로그램 종료 후, 해당 영화관의 총 매출액을 출력



// let reservation = document.getElementById("reserv");
// reservation.addEventListener("click", viewSeats);

// function viewSeats() {
//     let seats = document.getElementById("seat_container");
//     seats.style.display = "block";
// }

// const price = 12000;

// let seat =[];
// let seatReservation = document.querySelectorAll("#seat");
// seatReservation.addEventListener("click", function() {
//     for(let i = 0; i < seat; i++) {
//         if(seat[i] == 1) {
//             seatReservation.style.background = "red";
//         }
//     }
//  });

const seat_count = 10;
const seat_price = 12000;
const seats = new Array(seat_count).fill(0); // seats가 0으로 채워진 배열 생성
let total = 0; // 총 금액

function printSeats() {
    const seatsDiv = document.querySelector("#seats"); // div seats를 가지고 옴
    seatsDiv.innerHTML = ""; // 하위부분이 지워짐
    for(let i = 0; i < seat_count; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat"); // 클래스로 정의된 스타일을 적용
        if(seats[i] === 1) {
            seat.classList.add("booked");
        }
        seat.textContent = i + 1;
        seat.addEventListener("click", () => bookSeat(i)); // click이 되면 bookSeat함수가 불러짐
        seatsDiv.appendChild(seat);
    }
}

function bookSeat(index) {
    if(seats[index] === 1) {
        alert("이미 예매가 완료된 좌석 입니다.");
    } else {
        seats[index] = 1;
        total += seat_price;
        alert("예매가 완료되었습니다.");
        printSeats(); // 화면 바꿈
    }
}

function exitProgram() {
    alert(`총 매출액은 ${total}원 입니다.`);
    window.close(); // window창이 닫힘
}


document.addEventListener("DOMContentLoaded", () => {
    printSeats(); // 이 함수를 불러서 
    const exitBtn = document.querySelector("#exit");
    exitBtn.addEventListener("click", exitProgram); // callback에서는 괄호 넣으면 안됩



});