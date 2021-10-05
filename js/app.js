// ================ Open and show the side menu ================
$('.hamburger-menu-position').click(function () {
    $(".container-of-sideMenu").animate({ left: `0px` }, 1000);
});

// ================ Close the side menu ================
$(".times-sign-wrapper").click(function () {
    let sideMenuWidth = $("#side-menu").outerWidth();
    $(".container-of-sideMenu").animate({ left: `-${sideMenuWidth}px` }, 1000);
});

// ================ Accordion Function ================
$('#accordion div').click(function () {
    $("#accordion p").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

// ================ CountDown Function ================
let countDownDate = new Date('Oct 05, 2025 23:54:00').getTime();
let myFunc = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Output
    document.querySelector('.day').innerHTML = days + "d";
    document.querySelector('.hours').innerHTML = hours + "h";
    document.querySelector('.minutes').innerHTML = minutes + "m";
    document.querySelector('.seconds').innerHTML = seconds + "s";

    // Display a message when countdow is over
    if (timeLeft < 0) {
        clearInterval(myFunc);
        document.querySelector('.day').innerHTML = '';
        document.querySelector('.hours').innerHTML = '';
        document.querySelector('.minutes').innerHTML = '';
        document.querySelector('.seconds').innerHTML = '';
        document.querySelector('.times-up').innerHTML = "TIME UP!";
    }
}, 1000);

// ================ Text Area Function ================
//TODO: make the counter count numbers
//TODO: stop when reach the limit
let max = 100;
let myCounter = document.querySelector('.myCounter');
myCounter.innerHTML = max;
let tArea = document.getElementById('tArea');

tArea.addEventListener('keyup', function (e) {
    let areaLength = tArea.value.length;
    let counter = max - areaLength;
    if (counter <= 0) {
        myCounter.innerHTML = "Your available character is finished";
    }
    else {
        myCounter.innerHTML = counter;
    }
});


