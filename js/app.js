window.addEventListener("scroll", function(){
    let menu = document.querySelector("nav");
    menu.classList.toggle("fixed", window.scrollY > 0);
});