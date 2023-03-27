
function calculate() {
    const num1 = Number(document.getElementById("num1").value); // 받는 값은 문자로 넘어와서 변수타입 변경해줘야함
    const operator = document.getElementById("operator").value;
    const num2 = Number(document.getElementById("num2").value);

    let result;
    switch(operator) {
        case "+" : 
            result = add(num1, num2);
            break; 
        case "-" : 
            result = sub(num1, num2);
            break;
        case "*" : 
            result = mul(num1, num2);
            break;
        case "/" :
            result = div(num1, num2);
            break;
    }
    document.getElementById("result").innerHTML = `Result : ${result}`;
}
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
