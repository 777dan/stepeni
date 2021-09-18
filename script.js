var a = 1;
var s = 1;
var n = prompt("Введите количество клеток");
if (!isNaN(n)){
while (s <= n) {
    s++;
    a = a * 2;
  }
  alert(a + " зёрен");
  let b = a * 0.065;
  let b2 = b / 1000;
  alert(b2 + " г.");
}
else {
    alert("Введите число")
}