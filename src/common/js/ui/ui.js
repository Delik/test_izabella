function windowSize(){
    if ($(window).width() <= '1024'){
        $('.content__form').addClass('content__block').appendTo('.row');
    } else {
        $('.content__form').removeClass('content__block').appendTo('.content__block-has-form');
    }
}

$(function () {
    $('#print-title').typeIt({
        lifeLike: false,
        cursor: false,
        autoStart: true,
        speed: 40
    })

    $('.welcome-hello').typeIt({
        lifeLike: false,
        cursor: false,
        autoStart: true,
        speed: 200
    })
});

$(function () {
    $(window).on('load resize',windowSize);
    windowSize();
});
