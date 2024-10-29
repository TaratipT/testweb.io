document.getElementById("colorButton").addEventListener("click", function() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#f1c40f", "#8e44ad"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
