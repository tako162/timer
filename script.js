function twoDigit(num) {
    let ret;
    if (num < 10)
        ret = "0" + num;
    else
        ret = num;
    return ret;
}
function showClock() {
    let nowTime = new Date();
    let nowHour = twoDigit(nowTime.getHours());
    let nowMin = twoDigit(nowTime.getMinutes());
    let nowSec = twoDigit(nowTime.getSeconds());
    let msg = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("realtime").innerHTML = msg;
}
setInterval('showClock()', 1000);
function reloadIframe() {
    let iframes = document.getElementsByClassName('iframe');
    for (let i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src;
        console.log("iframe reloaded" + i);
    }

}
setInterval('reloadIframe()', 10000);