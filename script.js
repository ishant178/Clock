let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    // Correct rotation calculations
    let hRotation = 30 * (h % 12) + m / 2;  // 30 degrees per hour, plus the minute adjustment
    let mRotation = 6 * m;                  // 6 degrees per minute
    let sRotation = 6 * s;                  // 6 degrees per second

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);