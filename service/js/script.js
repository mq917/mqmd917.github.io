let date = new Date(); // получаем текущую дату
let time = date.getHours(); // получаем текущее время в часах
let mg = '';
if (time < 13) { // сравниваем время с число 13
    mg = ' Доброе утро!'; // если время меньше 13
} else {
    mg = ' Добрый вечер!'; // если время равно 13 и больше
};

document.write('<div class="div"> Maqomed ' + date.getFullYear() + " <br/>" + date.getHours() + ":" + date.getMinutes() + mg + "</div>");

document.getElementById('but').addEventListener('click',
    function() {
        let a = parseFloat(document.getElementById('input1').value);
        let b = parseInt(document.getElementById('input2').value);

        function sum(x, y) {
            return x + y;
        }
        let result = `${a} + ${b} = ${sum(a, b)}`;
        document.getElementById('result').innerHTML = result;
    });

let sum = (x, y) => console.log(x + y);
let a = sum(2, 4);
let b = sum(5, 6);

// var initialText = prompt();
// var exp = /hello/; //naxodim eto znachenie iz promt, esli eqo net budet null
// var result = exp.exec(initialText);
// document.write(result + "<br/>"); // hello

function updateTime() {
    document.getElementById("time").innerHTML = new Date().toTimeString();
}
setInterval(updateTime, 1000);