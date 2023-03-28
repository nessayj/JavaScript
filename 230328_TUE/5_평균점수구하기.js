// 5명의 성적을 입력 받고, 40점 이하는 보충 학습을 듣는 조건으로 항상 40점을 만들어 줌
// 5명의 성적에 대한 평균 구하기

let score = [];
let tmp;

score = prompt("학생 1의 성적을 입력하세요 : ", "");
score[0] = Number(tmp);
score = prompt("학생 2의 성적을 입력하세요 : ", "");
score[1] = Number(tmp);
score = prompt("학생 3의 성적을 입력하세요 : ", "");
score[2] = Number(tmp);
score = prompt("학생 4의 성적을 입력하세요 : ", "");
score[3] = Number(tmp);
score = prompt("학생 5의 성적을 입력하세요 : ", "");
score[4] = Number(tmp);

let totalScore;
for(let i = 0; i < score.length; i++) {
    if(score[i] <= 40) {
        score[i] == 40;
    }
    totalScore += Number(score[i]);
}

document.write(totalScore/5);

