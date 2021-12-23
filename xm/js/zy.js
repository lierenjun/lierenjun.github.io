function  ss(){
    window.location="https://www.baidu.com/";
}
function grzx(){
    window.open("./iframe/grzx/grzx.html","zy_if");
}

function  gd(){
    let if1 = document.getElementById("if1");
    if1.style.height = window.frames["zy_if"].document.body.scrollHeight + "px" ;
}
function hy(){
    let d2=document.getElementById("d2");
    d2.style.display="block";
    let d1=document.getElementById("d1");
    d1.style.display="block";

    setTimeout("d1.style.display='none'",3000);
    setTimeout("d2.style.display='none'",3000)
    d1.textContent = "暂无会员" ;
}
function app(){
    let d2=document.getElementById("d2");
    d2.style.display="block";
    let d1=document.getElementById("d1");
    d1.style.display="block";

    setTimeout("d1.style.display='none'",3000);
    setTimeout("d2.style.display='none'",3000)
    d1.textContent = "暂无app" ;
}
