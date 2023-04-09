function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
    ev.style.color = "white";
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
    inp.style.color = "white";
 }
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
    v.style.color = "white";
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
    num1.style.color = "white";
    num2.style.color = "white";
 }
