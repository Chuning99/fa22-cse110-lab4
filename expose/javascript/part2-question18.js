let d = new Date();
let time = d.toLocaleTimeString();
setInterval(printInSecond, 1000, time);
function printInSecond(a) {
    console.log(a);
}