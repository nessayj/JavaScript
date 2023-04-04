function insertList() {
    const subject = document.getElementById("insert").value;

    for(let e of subject) {
        let subjectList = document.createElement("li");
        subjectList.appendChild(e);
        e.innerText = subject;

    }
} 