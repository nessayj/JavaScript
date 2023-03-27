let lotto = [];

for(let i = 0; i < 6; i++) {
    let num = Math.floor((Math.random()*45) + 1);
    lotto[i] = num;

    for(let j = 0; j < i; j++) {
        while(num == lotto[j]){
            i--;
            break;
        }
    }
    lotto.push(num);
}

document.write(lotto);


// let lotto = [];
// for(let i =0; i<6; i++) {
//     let num = Math.floor(Math.random() * 44) + 1;
//     for(let j in lotto) { // 중복제거
//         while(num == lotto[j]) {
//             num = Math.floor(Math.random() * 44) +1;
//         }
//     }
//     lotto.push(num);
// }
// document.write(lotto);