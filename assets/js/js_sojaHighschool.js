
const OMIKUJI_ARY = ["絶頂", "大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶", "死亡"];

    const BUTTON = document.getElementById("omikuji"); // idがomikujiの部分を選択
    BUTTON.addEventListener('click', () => {
        let random = Math.trunc(Math.random()*9);
        console.log(random);
        alert.log(OMIKUJI_ARY[random]);
    });
