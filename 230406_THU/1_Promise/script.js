// // Fetch API : XMLHttpRequest방식과 가장 큰 차이점은 Promise  API 방식으로 구현

// fetch("https://jsonplaceholder.typicode.com/posts/1") // GET 과 JSON방식이 Default 이기때문에 안넣어줘도 됨
// .then((Response) => Response.json())
// .then((json) => console.log(json))
// .catch(error => console.error(error));
// 여기까지가 하나


// POST - 데이터 생성
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "POST", // HTTP 요청 방식
//     body: JSON.stringify({
//         title: "테스트 Promise",
//         body : "연주장",
//         userId : 1,
//     }),
//     headers:  {
//         //헤더값 정의
//     "contents-type" : "application/json; charset=UTF-8", //content-type정의

//     },
// })
//     .then((response) => response.json())        
//     .then((json) => console.log(json));

// PUT : 데이터 수정
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//  method: "PUT",
//  body: JSON.stringify({
//    id: 1,
//    title: "foo",
//    body: "bar",
//    userId: 1,
//  }),
//  headers: {
//    "Content-type": "application/json; charset=UTF-8",
//  },
// })
//  .then((response) => response.json())
//  .then((json) => console.log(json));

//  // DElETE - 데이터 삭제
//  fetch("https://jsonplaceholder.typicode.com/posts/1", {
//  method: "DELETE",
// });

// Promise를 통한 비동기 제어 방법 : 결과값은 내부객체이기 떄문에 then과 catch로만 접근이 가능
const successPromise = new Promise(function(resolve, reject) {
    // 익명의 함수를 써주는 이유는 한 번 쓰고 더이상 쓰지 않을 함수이기때문에
    setTimeout(function() {
        resolve("Success");
    }, 3000); // 3초 이후에 resolve가 들어옴
});

successPromise.then(function(value) {
    console.log(value);
});

successPromise.then((value) => console.log(value));

// Promise : 자동실행객체를 만들어놓고 수행이 되면 변수의 값을 받고
// 약속이 수행되었을 때 then절이 불러짐