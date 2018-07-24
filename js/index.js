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
    // 轮播图
    let bigbox=document.getElementsByClassName("bigbox")[0];
    let imgbox=bigbox.getElementsByClassName("img")[0];
    console.log(imgbox);
    let img=imgbox.getElementsByClassName("img");
    console.log(img);
    let forward=imgbox.getElementsByClassName("next")[0];
    console.log(forward);
    let back=imgbox.getElementsByClassName("small")[0];
    console.log(back);
    let t=setInterval(move,2000);
    let num=0;
    function move() {
        num++;
        if(num==8){
            img[num-1].style.zIndex=5;
            num=0;
            /*for(let i=0;i<img.length;i++){
                img[i].style.zIndex=5;
            }*/
        }
        img[num].style.zIndex=10;
        for(let j=0;j<num;j++){
            img[j].style.zIndex=5;
        }
        // img[num-1].style.zIndex=5;
    }
    bigbox.onmouseenter=function () {
        clearInterval(t);
    }
    bigbox.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    forward.onclick=function () {
        move();
    }
    function move2() {
        num--;
        if(num<0){
            img[0].style.zIndex=5;
            num=7;
        }
        img[num].style.zIndex=10;
        for(let i=7;i>num;i--){
            img[i].style.zIndex=5;
        }
    }
    back.onclick=function () {
        move2()
    }
}