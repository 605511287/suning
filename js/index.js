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
    let dian=document.getElementsByClassName("dian");
    console.log(dian);
    let bgcolor=document.querySelectorAll(".bgcolor li");
    console.log(bgcolor)
    let t=setInterval(move,2000);
    let num=0;
    let pand=true;
    function move() {
        num++;
        pand=false;
        if(num==8){
            img[num-1].style.zIndex=5;
            dian[7].className="dian";
            bgcolor[7].style.zIndex=1;
            num=0;
            /*for(let i=0;i<img.length;i++){
                img[i].style.zIndex=5;
            }*/
        }
        img[num].style.zIndex=10;
        dian[num].className="dian hot";
        bgcolor[num].style.zIndex=2;
        for(let j=0;j<num;j++){
            img[j].style.zIndex=5;
            dian[j].className="dian";
            bgcolor[j].style.zIndex=1;
        }
        // img[num-1].style.zIndex=5;
    }
    bigbox.onmouseenter=function () {
            clearInterval(t);  
            pand=true;
    }
    bigbox.onmouseleave=function () {
        if(!pand){
            return;
        }
        else{
            t=setInterval(move,2000);
        }
      
    }
    forward.onclick=function () {
        move();
    }
    function move2() {
        num--;
        if(num<0){
            img[0].style.zIndex=5;
            dian[0].className="dian";
            bgcolor[0].style.zIndex=1;
            num=7;
        }
        img[num].style.zIndex=10;
        bgcolor[num].style.zIndex=2;
        dian[num].className="dian hot";
        for(let i=7;i>num;i--){
            img[i].style.zIndex=5;
            dian[i].className="dian";
            bgcolor[i].style.zIndex=1;
        }
    }
    back.onclick=function () {
        move2()
    }

    for(let i=0;i<dian.length;i++){
        dian[i].onclick=function () {
            for(let j=0;j<dian.length;j++){
                dian[j].className="dian";
                img[j].style.zIndex=5;
                bgcolor[j].style.zIndex=1;
            }
            dian[i].className="dian hot";
            img[i].style.zIndex=10;
            bgcolor[i].style.zIndex=2;
            num=i;
        }
    }

    //头部广告
    let topBtn =document.getElementById("1");
    let topactive =document.querySelector(".topactive");
    let topAct =document.querySelector(".topAct");
    let clickTimes=0;
    topBtn.onclick=function(){
        clickTimes++;
        if(clickTimes%2==0){
            topactive.style.display="block";
            topAct.style.height="100px";
            topBtn.classList.toggle("topbtn");
            topBtn.classList.toggle("open");
        }
        else{
            topactive.style.display="none";
            topAct.style.height=0;
            topBtn.classList.toggle("open");
            topBtn.classList.toggle("topbtn");
        }
         
    }
//  头部导航

 

//  搜索框
    let searchtext =document.querySelector(".searchtext")
    let searchinput =document.querySelector(".searchtext .keyword");
    let hidesearch =document.querySelector(".hidesearch");
    let searchclose =document.querySelector(".hidesearch .close");
    searchclose.onclick=function(){
        hidesearch.style.display='none';
        searchinput.placeholder="7.31牛奶日 领券满199减60";
    }
    searchinput.onfocus=function(){
        searchinput.placeholder="";
        hidesearch.style.display="block";
    }
    searchinput.onblur=function(){
        searchinput.placeholder="7.31牛奶日 领券满199减60";
        hidesearch.style.display="none";
    }
    // 头部搜索框
    let tsearchtext =document.querySelector(".tsearchtext")
    let tsearchinput =document.querySelector(".tsearchtext .tkeyword");
    let thidesearch =document.querySelector(".thidesearch");
    let tsearchclose =document.querySelector(".thidesearch .tclose");
    tsearchclose.onclick=function(){
        thidesearch.style.display='none';
        tsearchinput.placeholder="7.31牛奶日 领券满199减60";
    }
    tsearchinput.onfocus=function(){
        tsearchinput.placeholder="";
        thidesearch.style.display="block";
    }
    tsearchinput.onblur=function(){
        tsearchinput.placeholder="7.31牛奶日 领券满199减60";
        thidesearch.style.display="none";
    }

    // 新闻头条滚动
    let toutiao=document.querySelectorAll(".toutiao ul");
    let times=0;
    let p=setInterval(gd,2000);
    let smallt=document.querySelectorAll(".toutiao li");
    let now=0,next=0;
    function gd(){
      next++;
      if(next>1){
          next=0;
      }
      toutiao[next].style.top="96px";
      animate(toutiao[now],{top:-96},1000);
      animate(toutiao[next],{top:0},1000);
      now=next
    }
    smallt.forEach(function(value,index){
        value.onmouseenter=function(){
            clearInterval(p);
        }
        value.onmouseleave=function(){
            p=setInterval(gd,2000);
        }
    })
    // 头部搜索框定位    // 楼层跳转
    let topsearch = document.querySelector(".topsearch");
    let phone=document.querySelector(".phone");
    let bodynav=document.querySelector(".bodynav");
    let p1=phone.offsetTop;
    let ev=document.querySelectorAll(".bodynav li");
    let floor=document.querySelectorAll(".floor");
    let eva =document.querySelectorAll(".bodynav a")
    let arrl=[];
    let sw=true;
    let returntop =document.querySelector(".return");
    floor.forEach(function(value,index){
        arrl.push(value.offsetTop)
    })
    // ev.forEach(function(value,index){
    //     value.onmouseenter=function(){
    //         eva[index].style.color="#fff"
    //     }
    //     value.onmouseleave=function(){
    //         eva[index].style.color="#333"
    //     }
    // })
    console.log(arrl)
    document.onscroll=function(){
        let juli=document.body.scrollTop||document.documentElement.scrollTop;
        if(juli>=750){
            topsearch.style.display="block"
        }
        if(juli<750){
            topsearch.style.display="none"
        }
        if(juli>=p1-200){
            bodynav.style.display="block";
        }
        if(juli<p1-200){
            bodynav.style.display="none";
        }
        if(juli>arrl[9]+300){
            bodynav.style.display="none";
        }
        arrl.forEach(function(value,index){
            if(!sw){
                return;
            }
            else{
                if(juli>value-100){
                    for(let i=0;i<arrl.length;i++){
                        ev[i].classList.remove("hover")
                        eva[i].classList.remove("color")
                    }
                    ev[index].classList.add("hover");
                    eva[index].classList.add("color");
                }
            }
           
        })
        ev.forEach(function(value,index){
            value.onclick=function(){
                sw=false;
                animate(document.body,{scrollTop:arrl[index]-50},200,function () {
                    sw=true;
                });
                animate(document.documentElement,{scrollTop:arrl[index]-50},200,function () {
                    sw=true;
                });
                for(let i=0;i<ev.length;i++){
                    ev[i].classList.remove("hover");
                    eva[i].classList.remove("color");
                }
                value.classList.add("hover");
                eva[index].classList.add("color");
            }
        })
        returntop.onclick=function(){
            sw=false;
            animate(document.body,{scrollTop:0})
            animate(document.documentElement,{scrollTop:0})
            
        }

    }

}