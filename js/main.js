$( ".header__burger" ).on( "click", function() {
    $('.nav__list').toggleClass('active');
    $('.header__burger').toggleClass('active');
    $( "body" ).toggleClass('lock');
});

$( ".header__burger-desktop" ).on( "click", function() {
    $('.nav__list').toggleClass('active');
    $('.header__burger-desktop').toggleClass('active');
    $( "body" ).toggleClass('lock');
});
