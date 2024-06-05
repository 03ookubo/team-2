

const OMIKUJI_ARY = ["絶頂", "大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶", "死亡"];

const BUTTON = document.getElementById("omikuji"); // idがomikujiの部分を選択

BUTTON.addEventListener('click', () => {
    let random = Math.trunc(Math.random() * OMIKUJI_ARY.length);
    console.log(random);
    document.getElementById('omikuji-result').innerText = "今日の運勢は「" + OMIKUJI_ARY[random] + "」 です";
    showDialog();
});

//ダイアログ
function showDialog() {
    document.getElementById('dialog-overlay').style.display = 'flex';
}
function closeDialog() {
    document.getElementById('dialog-overlay').style.display = 'none';
}