let count = 0;
document.getElementById("clickButton").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").textContent = count;
});
// トップページスライドショー
$('.mainimg').slick({
  autoplay: true,
  dots: true,				//丸いページナビボタンを表示
  arrows: false,			//左右の矢印
  autoplaySpeed: 4000,	//切り替えのスピード。デフォルトは3000。
  pauseOnHover: false,	//マウスオン時にスライドショーをストップする
      
      centerMode: true,
      centerPadding: '50px',
      focusOnSelect: true,
  });