$(function(){
    showRespMenu();
    $('.single-item').slick({

      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true

    });
    function showRespMenu() {
        var menu = $('.menu-item');
        var menu_login = $('.login-item');
        $('#responsive-tab').click(function(){menu.toggle()});
        $('#responsive-login').click(function(){menu_login.toggle()});
    }





});
