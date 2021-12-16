var bj_dw=0;
function aa(){
    bj_dw+=984;
    cc(bj_dw);
}
function bb() {
    bj_dw-=984;
    cc(bj_dw);
}
function cc( i ) {
    var a =document.getElementsByClassName('b1m_bj')[0];
    var b =document.getElementsByClassName('b1mbj_z')[0];
    var c =document.getElementsByClassName('b1mbj_y')[0];
    b.setAttribute("style","display:block");
    c.setAttribute("style","display:block");

    a.setAttribute("style", "left:" + i + "px")
    if (i>=0) {

        b.setAttribute("style","display:none")
    }else  if (i<=-1968){

        c.setAttribute("style","display:none")
    }



}
function  ss(){

}
function grzx(){
    window.location="../rzx.html";
}

var main1 = document.getElementById("main1");
// main1.setAttribute('style','transform: scale('+window.innerWidth/1000+')');

// window.addEventListener('load', function() {
//     window.addEventListener('resize', function() {
//         let aaaa = window.innerWidth/1000;
//         console.log(aaaa);
//         main1.setAttribute('style','transform: scale('+aaaa+')');
//     })
// })