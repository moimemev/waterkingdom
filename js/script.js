// $(document).ready(function(){

// })

// document.ready 생략가능
$(function(){
    console.log($('#gnb'));

    //변수에 담기
    let gnb=$('#gnb'),
        gnbLI = gnb.children('li'),
        dep1 = gnb.children('li').children('.dep1'),
        dep2 = gnb.find('.dep2');

   gnbLI.on('mouseenter',function(){
        $(this).addClass('on'); //li.on
        $(this).children('.dep2').stop().fadeIn();
    })

    gnbLI.on('mouseleave',function(){
        $(this).removeClass('on');
        $(this).children('.dep2').stop().fadeOut();
    })

    //탭메뉴
    let tabMenu = $('.tab-menu li');
    tabMenu.click(function(event){
        //a태그 클릭작동안하게 처리
        event.preventDefault();
        let activeCon = $(this).children('a').attr('href');
        console.log(activeCon);

        $('#sec1 .wrap').hide();
        $(activeCon).show();

        tabMenu.children('a').removeClass('on');
        $(this).children('a').addClass('on');
    })
})