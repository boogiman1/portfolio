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

    // 이미지 이동
    const hiddens=document.querySelectorAll('.publ_box')
    const thumbs=document.querySelectorAll('.publ_box img')
    hiddens.forEach(function(hidden){
        hidden.addEventListener("mouseenter",function(e){
            e.preventDefault();
            console.log(e);
            const tg=e.target;
            const tgH=tg.offsetHeight;
            const tgThumb=tg.firstChild;
            
        })
        console.log(hidden);
    })
})