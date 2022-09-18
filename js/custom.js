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
        winSct>=320?document.querySelector('header').classList.add('sticky'):document.querySelector('header').classList.remove('sticky')
        scrollON(winSct)
    })
})