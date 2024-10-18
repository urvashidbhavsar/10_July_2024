$(function () {
    $("#togglemenu").click(function () {
        $("#nav").toggleClass("navShow")
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("header").addClass("moveheader")
        } else {
            $("header").removeClass("moveheader")
        }
    })
})

// function showMenu() {
//     let mynav = document.getElementById("nav");
//     mynav.classList.toggle("navShow")
// }

// let header = document.querySelector("header");
// window.addEventListener("scroll", () => {
//     let current = this.scrollY;
//     if (current > 0) {
//         header.classList.add("moveheader")
//     } else {
//         header.classList.remove("moveheader")
//     }
// })