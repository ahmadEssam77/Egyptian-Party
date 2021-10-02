// ================ Open and show the side menu ================
$('.hamburger-menu-position').click(function() {
    $(".container-of-sideMenu").animate({left : `0px`}, 1000);
});

// ================ Close the side menu ================
$(".times-sign-wrapper").click(function() {
    let sideMenuWidth = $("#side-menu").outerWidth();
    $(".container-of-sideMenu").animate({left : `-${sideMenuWidth}px`}, 1000);
});

// ================ Accordion Function ================
$('#accordion div').click(function() {
    $("#accordion p").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


