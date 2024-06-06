document.addEventListener("DOMContentLoaded", function() {
    // 背景色を変更するボタンの要素を取得
    var changeColorButton = document.getElementById("changeColorButton");

    // 背景色を変更する関数
    function changeBackgroundColor() {
        // 現在の背景色を取得
        var currentColor = document.body.style.backgroundColor;

        // 現在の背景色が白色ならば黒色に、それ以外ならば白色に変更する
        if (currentColor === "" || currentColor === "white") {
            document.body.style.backgroundColor = "black";
        } else {
            document.body.style.backgroundColor = "white";
        }
    }

    // ボタンがクリックされたときに背景色を変更するイベントリスナーを追加
    changeColorButton.addEventListener("click", changeBackgroundColor);
});