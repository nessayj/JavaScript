// 산술연산자 : 수학연산을 수행하는 연산자를 의미
let a = 2;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); // 2 * 2 * 2
console.log(--a); // 전위 단항 연산자, =1
console.log(b++); // 후위 단항 연산자, =3

// 대입 연산자 : 대입연산자와 복합 대입연산자가 있음
let x = 10;
let y = 20;

// x = x + 10; // x에 10을 더해서 x에 다시 대입
x += 10;
console.log(x);
y *= 10;
console.log(y);
