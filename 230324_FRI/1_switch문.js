let d = new Date();
let day = d.getDay();
let dayName = "";

// 원래의 스위치문
// console.log(day);

// switch(day) {
//     case 0 :
//         dayName = "일요일";
//         break;
    
//     case 1 :
//         dayName = "월요일";
//         break;

//     case 2 :
//         dayName = "화요일";
//         break;
    
//     case 3 :
//         dayName = "수요일";
//         break;
    
//     case 4 :
//         dayName = "목요일";
//         break;

//     case 5 :
//         dayName = "금요일";
//         break;

//     case 6 :
//         dayName = "토요일";
//         break;

//     case 7 :
//         dayName = "일요일";
//         break;

//     default :
//         dayName = "";
// }

// console.log(dayName);

const dayNames = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
]

console.log(dayNames[day]);