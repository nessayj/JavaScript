function printInfo() {
    console.log(`웹 브라우저 너비 : ${window.innerWidth}`);
    console.log(`웹 브라우저 높이 : ${window.innerHeight}`);
    console.log(`웹 브라우저 창의 넓이 : ${window.outerWidth}`);
    console.log(`웹 브라우저 창의 높이 : ${window.outerHeight}`);
    console.log(`웹 브라우저 창 위쪽면과 모니터 사이의 간격 : ${window.screenTop} / ${window.screenY}`);
    console.log(`웹 브라우저 창 왼쪽면과 모니터 사이의 간격 : ${window.screenLeft} / ${window.screenX}`);
    console.log(`웹 브라우저 창의 스크롤 가로 위치 : ${window.scrollX}`);
    console.log(`웹 브라우저 창의 스크롤 세로 위치 : ${window.scrollY}`);
}

function popUp() {
    window.open('popup.html', "팝업", 'width=400, height=300'); // 팝업을 띄워주는 윈도우 창 필요(새창필요) = popup.html이라는 창을 새로 만들어 줌
    // 'popup.html'말고 외부 링크를 걸어줘도 됨
}

// 웹 브라우저의 스크롤 위치를 특정 좌표로 이동
function sTo() {
    window.scrollTo(200, 400);
}

// 현재 위치에서 상대적인 위치로 이동
function sBy() {
    window.scrollBy(200, 400);
}

