document.addEventListener('DOMContentLoaded',function(){
    let sections=document.querySelectorAll('.section');
    nav=document.querySelectorAll('.nav ul li');
    win=window;
    winSct=window.scrollY;

    const navOff=()=>{
        nav.forEach((o)=>{
            o.classList.remove('on')
        })
    }

    nav.forEach((el)=>{
        el.addEventListener("click",function(e){
            e.preventDefault()
            document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior:"smooth"})
            navOff()
            el.classList.add("on")
        })
    })

    win.addEventListener("scroll",function(e){
        e.preventDefault()
        winSct=this.scrollY;
        headerHeight=document.querySelector('header').scrollHeight
        winSct>=headerHeight?document.querySelector('header').classList.add('sticky'):document.querySelector('header').classList.remove('sticky')
        // scrollON(winSct)
    })

    // 컨텐츠 스크롤 시 나오게
    window.addEventListener('load',function(){
        addEventListener('scroll',function(){
            if(pageYOffset>=600||scrollY>=600){
                this.document.querySelector("#section2 .container .section2_textBox").classList.add('on')
            }
            if(pageYOffset>=2400||scrollY>=2400){
                var boxWrap = document.querySelectorAll("#section4 .container .publ_container .publ_box")
                boxWrap[0].classList.add('on')
                boxWrap[1].classList.add('on')

            }
            if(pageYOffset>=2800||scrollY>=2800){
                var boxWrap = document.querySelectorAll("#section4 .container .publ_container .publ_box")
                boxWrap[2].classList.add('on')
                boxWrap[3].classList.add('on')
            }
        })
    })

    // top_btn
    // const topBtn=document.querySelector('.top_btn');
    // const circle0=document.querySelector('.top_btn .circle0');
    // topBtn.children.forEach((el)=>{
    //     el.addEventListener('click',function(e){
    //         e.preventDefault()
    //         document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior:"smooth"})
    //     })
    //     circle0.addEventListener('click',function(e){
    //         e.preventDefault();
    //         if(circle0){
    //             circle0.classList.add('on');
    //         }
    //         else{circle0.classList.remove('on');}
    //     })
    // })
})