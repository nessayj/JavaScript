    let realDate = new Date();
    let dueDate = new Date("2023-07-25");
    let remainTime = dueDate.getTime() - realDate.getTime();
    
    remainTime = Math.round(remainTime/(1000*60*60*24));

    document.querySelector('.remain_time').innerHTML = remainTime;
