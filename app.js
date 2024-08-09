setInterval(()=>{
    let date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30 * htime + mtime/2 ; 
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    let hour = document.querySelector("#hour");
    hour.style.transform = `rotate(${hrotation}deg)`;

    let minute = document.querySelector("#minute");
    minute.style.transform = `rotate(${mrotation}deg)`;

    let second = document.querySelector("#second");
    second.style.transform = `rotate(${srotation}deg)`;
},1000);