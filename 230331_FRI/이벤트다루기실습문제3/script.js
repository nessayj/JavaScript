let explainBtn = document.getElementById("explain");
explainBtn.addEventListener("click", explainPop);

function explainPop() {
    let pop = document.getElementById("explanation");
    pop.style.display = "block";
    
}

let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", close);

function close() {
    let close = document.getElementById("explanation");
    close.style.display = "none";
}