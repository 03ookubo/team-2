function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}