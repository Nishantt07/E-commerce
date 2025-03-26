

let sidehamburg = document.getElementsByClassName("fa-xmark")[0];
let bars = document.getElementsByClassName("fa-bars")[0];
let unorderedhamburglists = document.getElementsByClassName("unordered-hamburg-lists")[0];
let popupmodelsection = document.getElementsByClassName("popup-model-section")[0];
let body = document.getElementsByClassName("all-main")[0];
let popupxmark = document.getElementsByClassName("popup-xmark")[0];

bars.addEventListener("click", function(){
    unorderedhamburglists.classList.add("showsidehamburg")
    unorderedhamburglists.classList.remove("hidesidehamburg")
})
sidehamburg.addEventListener("click", function(){
unorderedhamburglists.classList.add("hidesidehamburg")
unorderedhamburglists.classList.remove("showsidehamburg")
})

let input = document.getElementsByClassName("popup-input")[0];
input.addEventListener("click",function(){
    input.style.borderColor = "black";
})

window.onload = function(){
    setTimeout(() => {
        popupmodelsection.style.display = "flex";
        body.classList.add("bg-color");
        
    }, 2000);
}

popupxmark.addEventListener("click" , function(){
    popupmodelsection.style.display = "none";
    body.classList.remove("bg-color");


})

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var headerHeight = document.querySelector('.header-customer-details-wrapper').offsetHeight;
    if (window.scrollY > headerHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        document.body.style.paddingTop = '90px'; // Adjust based on navbar height
    } else {
        navbar.style.position = 'static';
        document.body.style.paddingTop = '0';
    }
});