var bj_dw=0;
function aa(){
    bj_dw+=1000;
    cc(bj_dw);
}
function bb() {
    bj_dw-=1000;
    cc(bj_dw);
}
function cc( i ) {
    var a =document.getElementsByClassName("b1m_bj")[0];
    var b =document.getElementsByClassName('b1mbj_z')[0];
    var c =document.getElementsByClassName('b1mbj_y')[0];
    b.setAttribute("style","display:block");
    c.setAttribute("style","display:block");

    a.setAttribute("style", "left:" + i + "px")
    if (i>=0) {

        b.setAttribute("style","display:none")
    }else  if (i<=-2000){

        c.setAttribute("style","display:none")
    }
}

function dd(){
    location.href="../iframe/sp.html"
}

