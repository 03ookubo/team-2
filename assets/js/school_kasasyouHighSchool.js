//クリックのカウント
let count = 0;
document.getElementById("clickButton").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").textContent = count;
});
//クリックカウントのリセット
document.getElementById("resetButton").addEventListener("click", function() {
  count = 0;
  document.getElementById("clickCount").textContent = count;
});