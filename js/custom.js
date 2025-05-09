$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {

        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

})

$(function () {
    const lenis = new Lenis({
        autoRaf: true,
        duration: 2,
    });
});


$(function () {
    AOS.init();
});