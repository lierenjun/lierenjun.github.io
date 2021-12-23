var btt = document.getElementById('loginDiv');
var bt = btt.getElementsByTagName('input');

btt.style.transform = "scaleX(" + window.innerWidth / 1000 + ")" + "scaleY(" + window.innerWidth / 1000 + ")";
for (let i = 0; i < 4; i++) {
    bt[i].onclick = function () {
        document.getElementById("rk").setAttribute("src", "img/熊猫" + (i + 1) + ".png");

    }
}

window.addEventListener('load', function () {
    window.addEventListener('resize', function () {
        btt.style.transform = "scaleX(" + window.innerWidth / 1000 + ")" + "scaleY(" + window.innerWidth / 1000 + ")";
    })
})

window.addEventListener('keypress', function (even) {
    if (even.keyCode == 13) {
        window.open("./入口视频.html")
    }
})