
    let wishlistt = JSON.parse(localStorage.getItem("wishlist"));

let wishlistSection = document.getElementsByClassName("featured-products-containerr")[0];
let arrayLength = wishlistt.length;
console.log(arrayLength);
let i = arrayLength-1;

for(let j=0;j<=arrayLength;j++){
    wishlistSection.innerHTML += `
    <a href="product.html?id=${wishlistt[j].id
    }"> 
    <div class="featured-single-cloth">
                   <div class="clothes-image-div">
                       <img src="${wishlistt[j].image}" class="Clothes-images" alt="Clothes-Image">
                   </div>  
                   <div>
                       <h1 class="brand-name">Adidas
                   </div>
                   <div><i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                       <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                       <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                       <i class="fa-regular fa-star"></i>
                       <i class="fa-regular fa-star"></i>
                   </div>
                   <div>
                       <h1 class="cloth-name">${wishlistt[j].name}</h1>
                   </div>
           
                   <div class="cloth-price-cart">
                       <h1 class="cloth-price">${wishlistt[j].price}</h1>
                       <i class="fa-solid fa-cart-shopping cloth-cart"></i>
                   </div>
               </div>
               </a>
   `
}
 