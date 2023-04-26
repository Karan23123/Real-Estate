var swiper = new Swiper(".mySwiper", {
    loop: true,
    clickable: true,
    pagination: {
        el: ".swiper-pagination",
    },
});


let header = document.getElementById("navBar");
let btns = header.getElementsByClassName("nav-item")
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}