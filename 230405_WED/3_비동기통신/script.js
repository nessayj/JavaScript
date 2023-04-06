// 객체 생성 
const xhr = new XMLHttpRequest();
xhr.open("POST", "URL 경로"); // IP주소, port 번호, 백엔드가 수신할 컨트롤러
xhr.setRequestHeader("contents-type", "application/json"); // json으로 날릴고야~~ 너가 대비하렴
const data =  {
    id : 100,
    title : "비동기 통신연습임돠",
    author : "연주"
};

xhr.send(JSON.stringify(data)); //서버로 전송