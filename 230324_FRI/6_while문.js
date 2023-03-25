let treeHit = 0;
while(treeHit < 10) {
    treeHit++;
    document.write(`<p>나무를 ${treeHit}번 찍었습니다. </p>`);
    if(treeHit == 10) { 
        document.write(`<p>나무가 넘어갑니다.</p>`);
        break;
    }
}

// do while문

let i = 1;
do{
    console.log(i);
    i++;
} while(i <= 5); // 참인동안 반복
// do while문을 while문으로
while(true) {
    console.log(i);
    i++;
    if(i > 5) break;
}