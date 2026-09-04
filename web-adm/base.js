function startTime() {
    const today = new Date();
    let d = today.getDate();
    let mo = today.getMonth() + 1;
    let y = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    d = checkTime(d);
    mo = checkTime(mo);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = d + "-" + mo + "-" + y + " " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

