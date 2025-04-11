let sidehamburg = document.getElementsByClassName("fa-xmark")[0];
let bars = document.getElementsByClassName("fa-bars")[0];
let unorderedhamburglists = document.getElementsByClassName("unordered-hamburg-lists")[0];
let popupmodelsection = document.getElementsByClassName("popup-model-section")[0];
let body = document.getElementsByClassName("all-main")[0];
let popupxmark = document.getElementsByClassName("popup-xmark")[0];


document.addEventListener("DOMContentLoaded", function(){
    let navbar = document.getElementsByClassName("header-wrapper")[0];
    let footer = document.getElementsByClassName("footer-wapper")[0];
    if (navbar && footer){
        sessionStorage.setItem("navbarHtml" , navbar.outerHTML);
        sessionStorage.setItem("footerHtml", footer.outerHTML);
    }
})

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
        document.body.style.paddingTop = '90px'; 
    } else {
        navbar.style.position = 'static';
        document.body.style.paddingTop = '0';
    }
});


function savethewishlist(event,thiss){
event.preventDefault();
event.stopPropagation();
// thiss.classList.toggle("saveWishlis");
gettheIdForWishlist(thiss);
}

function gettheIdForWishlist(thiss){
let url_string = thiss.parentElement.parentElement.parentElement.parentElement.href;
let url =  new URL(url_string);
let id = url.searchParams.get("id");
// console.log(id)
 gettheDetailsUsingId(id,thiss)
}




async function gettheDetailsUsingId(idd,thiss){
// let Wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let wishlistData = localStorage.getItem("wishlist");
let Wishlist = wishlistData? JSON.parse(wishlistData): [] ;
    let Datafile = await fetch("productdetails.json");
    // console.log(Datafile)
    let data = await Datafile.json();
    let productData = data.products;
    // console.log(productData);
    let particularProduct = productData.find(cloth => cloth.id == idd);
    console.log(particularProduct);

    let exists = Wishlist.some(one => one.id == particularProduct.id)
    if(!exists){
        Wishlist.push({
            id: particularProduct.id,
            image: particularProduct.images[0],
            name: particularProduct.name,
            price: particularProduct.price
        });
        thiss.classList.add("saved-to-wishlist");

    
    }
    else if (exists){
        Wishlist = Wishlist.filter(item => item.id !== particularProduct.id)
        thiss.classList.remove("saved-to-wishlist")
    }
             

    localStorage.setItem("wishlist",JSON.stringify(Wishlist));
    console.log(Wishlist);
}

// window.onload = function () {
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     document.querySelectorAll(".fa-heartt").forEach(icon => {
//         let id = parseInt(icon.getAttribute("data-id"));
//         if (wishlist.includes(id)) {
//             icon.classList.add("saved-to-wishlist"); // Keep red after refresh
//         }
//     });
// };


window.onload = function (){
    let wishlistData = localStorage.getItem("wishlist");
let Wishlist = wishlistData? JSON.parse(wishlistData): [] ;
let icons = document.querySelectorAll(".fa-heartt");
console.log(icons)
icons.forEach(icon => {
let id = icon.getAttribute("data-id");
let found  = Wishlist.some(item=>item.id == id);
if(found){
    console.log("founded the icon")
icon.classList.add("saved-to-wishlist");
}
})
}

function toggleit(){
    let unord = document.getElementsByClassName("unord")[0];
    unord.classList.toggle("pagesinhem");
}