function rotateLeft() {
    document.querySelector("img").classList.toggle("rotateleft");
}

function rotateRight() {
    document.querySelector("img").classList.toggle("rotateright");
}





function name(vxod) {
    alert(vxod);
}
document.querySelector("img").onclick = function() {
    name('hello maqa');
};