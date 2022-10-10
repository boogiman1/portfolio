$(function(){
    const totalLength=440;
    const progressBox=$('.skill_boxs .skill_box');
    const progressOst=$('.skill_boxs').offset().top-700; //스크롤 지정을 위한 상수 선언
    const animation=$('.skill_boxs'); //스크롤이 움직일때 안움직이게 클래스로 설정

    //스크롤이 움직일때 안움직이게 클래스로 설정
    $(window).scroll(function(){
        if($(window).scrollTop()>=progressOst){
            if(!animation.hasClass('inAni')){
                progressAni();
                animation.addClass('inAni')
            }
        }
    })

    function progressAni(){
        progressBox.each(function(){
            let $this=$(this);
            let title=$this.find('h3');
            let targetNum=title.attr('data-num');
            let circle=$this.find('circle');
            
            $({rate:0}).animate({rate:targetNum},{duration:4000,
                progress:function(){
                    let now=this.rate;
                    let amount=totalLength-(totalLength*now/100);
                    title.text(Math.floor(now)+'%');
                    circle.css({strokeDashoffset:amount})
                }
            })
        })
    }
})

// 팝업
function myPop(){
    $('.popup_base').css('height',$(document).height());
    $('.popup_base').show();
}
function closePop(){
    $('.popup_base').hide();
}
const modal=$('.popup_base')
modal.click(function (e) {
    e.preventDefault();
    modal.addClass('close')
  });