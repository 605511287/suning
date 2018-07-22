window.onload=function () {
    //轮播图侧导航
    let nav=document.getElementsByClassName('nav')[1];
    console.log(nav);
    let con=nav.getElementsByClassName('con');
    console.log(con);
    let sideTab=nav.getElementsByClassName('sideTab');
    console.log(sideTab);
    for(let i=0;i<con.length;i++){
        con[i].onmouseenter=function () {
            sideTab[i].style.display="block";
        }
        con[i].onmouseleave=function () {
            sideTab[i].style.display="none";
        }
    }
}