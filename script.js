$(document).ready(function(){
    $('#icon-menu').on('click', function(){
        $('nav').toggleClass('expand');
    });
    $('#icon-menu').on('click', function(){
        $('#icon-menu').toggleClass('trigger');
    });
});
$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $('.navigation, .logo').addClass('nav-style');
    }else{
        $('.navigation, .logo').removeClass('nav-style');
    }
});