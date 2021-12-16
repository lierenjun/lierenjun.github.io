


var btt= document.getElementById('loginDiv');
var bt = btt. getElementsByTagName('input');
window.addEventListener('load', function() {
    window.addEventListener('resize', function() {
        btt.setAttribute('style','transform: scaleX('+window.innerWidth/1000+') scaleY('+window.innerHeight/600+'); ')
    })
})
for (let i=0 ; i < 4 ; i++){
    bt[i].onclick=function () {
        document.getElementById("rk").setAttribute("src","img/熊猫"+(i+1)+".png");

    }
}