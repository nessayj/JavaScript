// 객체 생성 
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // IP주소, port 번호, 백엔드가 수신할 컨트롤러// "POST" = setting / "GET" = 조회
xhr.setRequestHeader("contents-type", "application/json"); // json으로 날릴고야~~ 너가 대비하렴
// 리터럴객체로 만듬
const data =  {
    id : 100,
    title : "비동기 통신연습임돠",
    author : "연주",
    addr : "별나라왕국"
};
// POST 방식은 바디영역에 정보를 넣어서 날려주고 GET은 그냥 조회라서 url부분에 넣어서 날려줌
xhr.send(JSON.stringify(data)); //서버로 전송
// XMLHttpRequest 객체를 사용하여 서버로 HTTP요청을 보내는 메서드
// XMLHttpRequest 객체를 사용하여 서버로부터 HTTP 응답을 받았을 때 호출되는 콜백 함수를 설정하는 프로퍼티

xhr.onload = () => { // 콜백함수 ; 서버가 응답이 오면 onload가 불려짐; 함수로만 걸려있고 불려지는 시점은 알 수 없고 알 필요가 없음
    if (xhr.status === 201) {
        // 정상적으로 응답되면 status가 200

        const res = JSON.parse(xhr.response);
        console.log(res); 
        // console.log(xhr.resoponse);
    } else {
        // 에러 발생
        console.error(xhr.status, xhr.statusText);
    }
};