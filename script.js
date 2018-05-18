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

// burger1

$(document).ready(function(){
    var burger1 = $('.burger1');
    burger1.click(function(){
        $(this).toggleClass('active');
    });
});

// burger2
$(document).ready(function(){
    var burger2 = $('.burger2');
    burger2.click(function(){
        $(this).toggleClass('active');
    });
});
