let a,b,c, tmp;
let min, max;
tmp = prompt("첫 번째 수 : ");
a = Number(tmp);
tmp = prompt("두 번째 수 : ");
b = Number(tmp);
tmp = prompt("세 번째 수 : ");
c = Number(tmp);

if(a > b) {
    if(a > c) max = a;
    else max = c;
} else {
    if (b > c) max = b;
    else max = c;
}
if(a > b) {
    if(b > c) min = c;
    else min = b;
} else {
    if (a > c) min = c;
    else min = a;
}

document.write("<h3> 제일 큰 값 : " + max + "</h3><br>");
document.write("<h3> 제일 작은 값 : " + min + "</h3>");