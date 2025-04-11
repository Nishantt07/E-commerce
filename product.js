
window.onload = async function findProduct(){
    const urlParams = new URLSearchParams(window.location.search);
    const productid = Number.parseInt(urlParams.get("id"));
    try{
const response = await fetch("productdetails.json");
if(!response.ok){
    throw new Error("Unable to fetch the data file");
}
else{
    let productsData = await response.json();
    // console.log(productsData)
    let products = productsData.products;
    // console.log(products)
    const praticularProduct = products.find(p => p.id === productid);
    console.log(praticularProduct);
    if(!praticularProduct){
console.log("Product Not Found");
    }
    else{
        let productSection = document.getElementsByClassName("product-details")[0];
        productSection.innerHTML  = `  <div class="product-details-container">
            <div class="product-image">
                <div class="main-image">
                    <img src=${praticularProduct.images[0]} class="its-big-image">
                </div>
                <div class="secondary-image">
                    <img src=${praticularProduct.images[0]} onclick="functionshowthisimage(this)">

                    <img src=${praticularProduct.images[1]} onclick="functionshowthisimage(this)">
                    <img src=${praticularProduct.images[2]} onclick="functionshowthisimage(this)">
                    <img src=${praticularProduct.images[3]} onclick="functionshowthisimage(this)">
                </div>
            </div>
            <div class="product-describe">
                <div>
                    <h1 class="product-name">${praticularProduct.name}</h1>
                </div>
                <div class="priceandsale">
                    <div>
                        <h1 class="product-price">${praticularProduct.price}</h1>
                    </div>
                    <div>
                        <h1 class="product-discount">${praticularProduct.off}</h1>
                    </div>
                    <div>
                        <h2 class="product-sale">SALE</h2>
                    </div>
                    <div>
                        <h2 class="product-off">-20%</h2>
                    </div>
                </div>
                
                <div>
                    <h1 class="tax">Tax Included</h1>
                </div>
                <div>
                    <h1 class="vendor"> <b>Vendor</b> : Fashion</h1>
                </div>
                <div>
                    <h1 class="stock">Only <b>53</b> available in stock!</h1>
                </div>
                <div>
                    <h1 class="product-color">Color : ${praticularProduct.color}</h1>
                </div>

                <div class="size-details">
                <div>Size</div>
                    <label onclick = changeSizeColor(this) class="sizee">
                        <input type="radio" name="size" value="S" >
                        S
                    </label>
                    <label onclick = changeSizeColor(this) class="sizee">
                        <input type="radio" name="size" value="M">
                        M
                    </label>
                    <label onclick = changeSizeColor(this) class="sizee">
                        <input type="radio" name="size" value="L">
                        L
                    </label>
                    <label onclick = changeSizeColor(this) class="sizee">
                        <input type="radio" name="size" value="XL">
                        XL
                    </label>
                </div>
                

                <div>Quantity</div>

                <div class="quantity-div">
                    <div class="quantity-number">
                        <button class="decrease-quantity">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <!-- <input type="number" min="1" max="10"> -->
                        <input type="number" min="1" max="10" id="quantity-input" value="1">
                        <button class="increase-quantity">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>


                    <div>
                        <button class="button-24 addtocart" onclick = "addThisToCart('${praticularProduct.name}',${praticularProduct.price},${praticularProduct.off},'${praticularProduct.color}','${praticularProduct.images[0]}',${productid})" >Add To Cart</button>

                    </div>

                </div>

<a href="checkoutpage.html" onclick ="collectTheData(event,'${praticularProduct.name}',${praticularProduct.price},${praticularProduct.off},'${praticularProduct.color}','${praticularProduct.images[0]}')"> 
<div class="button-24 buyNow"  >Buy Now</div>
</a>
               

                <div class="safe-checkout">
                    <div>Guaranteed Safe Checkout</div>
                    <img src="clothes/[CITYPNG.COM]HD Guaranteed Safe Checkout Payments Badge Icons - 1000x1000.png"
                        alt="" class="safe-checkout-image">
                </div>
                <hr>
                <div class="details">
                    <div class="details-first" onclick = "showthedetails()">
                        <i class="fa-solid fa-eye"></i>
                        <h1>Details</h1>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                        <div class="product-info-div">
                            <h1 class="product-info" >This Floral Pattern Colorful Summer Tee is a must-have for any summer wardrobe. The
                                colorful floral pattern adds a touch of fun to any outfit, while the lightweight fabric
                                keeps you cool and comfortable on hot days. Expertly crafted with high-quality materials,
                                this tee is both stylish and durable. Experience the perfect blend of fashion and function
                                with this versatile piece.
                            </h1>
                        </div>
                    
                </div>
                <hr>


            </div>
        </div>`
    }
}
    }
    catch(error){
console.log(error)
    }
}

document.addEventListener("DOMContentLoaded",function(){
    let navbarContainer = document.getElementsByClassName("navbar-container")[0];
    let footerContainer = document.getElementsByClassName("footer-containerr")[0];
    let navbarHtml = sessionStorage.getItem("navbarHtml");
    let footerHtml = sessionStorage.getItem("footerHtml")
    
    if(navbarContainer && navbarHtml ){
navbarContainer.innerHTML = navbarHtml;

    }

    if(footerContainer && footerHtml){
        footerContainer.innerHTML = footerHtml;
    }



    let unorderedhamburglists = document.getElementsByClassName("unordered-hamburg-lists")[0];
    let bars = document.getElementsByClassName("fa-bars")[0];
bars.addEventListener("click", function(){
    unorderedhamburglists.classList.add("showsidehamburg")
    unorderedhamburglists.classList.remove("hidesidehamburg")
})
let sidehamburg = document.getElementsByClassName("fa-xmark")[0];

sidehamburg.addEventListener("click", function(){
unorderedhamburglists.classList.add("hidesidehamburg")
unorderedhamburglists.classList.remove("showsidehamburg")
})





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
// let size  = document.getElementsByClassName("size-details")
// size.addEventListener("click", function(){
// })

// function increasedecreasequantity(){

// }

setTimeout(() => {
    let quantityInput = document.getElementById("quantity-input");
    let Newvalue = quantityInput.value;
    sessionStorage.setItem("quantity",Newvalue)

    console.log(Newvalue);
    quantityInput.addEventListener("keypress",function(event){
        event.preventDefault();
    })
    quantityInput.addEventListener("paste",function(event){
        event.preventDefault();
    })
    
    let increasequantity = document.querySelector(".increase-quantity");
    let decreasequantity = document.querySelector(".decrease-quantity");
    
    
    increasequantity.addEventListener("click" , function(){
        if(quantityInput.value<10 & quantityInput.value>-1){
            Newvalue++;
            quantityInput.value = Newvalue;
            sessionStorage.setItem("quantity",Newvalue)
        }
    
    })
    
    
    decreasequantity.addEventListener("click" , function(){
        if(quantityInput.value>1){
            Newvalue--;
            quantityInput.value = Newvalue;
            sessionStorage.setItem("quantity",Newvalue)

        }
    
    })   
}, 1000);

function functionshowthisimage(thiss){

let Bigimage = document.getElementsByClassName("its-big-image")[0];

    let Smallimageurl = thiss.src;
    Bigimage.src = Smallimageurl;
}

function showthedetails(){
    let productinfodiv = document.getElementsByClassName("product-info-div")[0];
   
    
    productinfodiv.classList.toggle("showit");
    
}


function collectTheData(event,name,price,off,color,image){
    event.preventDefault()
sessionStorage.setItem("name",name);
sessionStorage.setItem("price",price);
sessionStorage.setItem("off",off);
sessionStorage.setItem("color",color);
sessionStorage.setItem("image",image);
sessionStorage.setItem("checkoutmode","single")
 window.location.href = "checkoutpage.html";


}

function setCartCheckoutMode(){
    sessionStorage.setItem("checkoutmode","cart");
}

document.addEventListener('DOMContentLoaded', function(){
    let mode = sessionStorage.getItem("checkoutmode")
    if(mode === 'single'){
        showSingleProduct();
    }

    else if(mode === 'cart'){
        showCartItems();
    }

    else {
        console.log("not found")
    }
})
function showSingleProduct(){
    let name = sessionStorage.getItem("name");
    let price = sessionStorage.getItem("price");
    let color = sessionStorage.getItem("color");
    let image = sessionStorage.getItem("image");


let cartitems = document.getElementsByClassName("cart-items")[0];
cartitems.innerHTML= `

<div class="cart-item">
    <img src="${image}">
    <div class="item-details">
        <b><p>${name}</p></b>
        <p class="quantity">Quantity: 2</p>
        <p class="quantity">Size:XL</p>


    </div>
    <p class="price"><b>₹${price}</b></p>
</div>
`



}



let totalmoney = 0;
function showCartItems(){
    let cartitems = document.getElementsByClassName("cart-items")[0];

    let addToCART = JSON.parse(localStorage.getItem("addtocart"));
    console.log(addToCART)
    let totallength = addToCART.length;
    cartitems.innerHTML = "";
    for(let m = 0;m<totallength;m++){
        totalmoney = totalmoney + addToCART[m].totalprice;
        cartitems.innerHTML += `
       
        <div class="cart-item">
            <img src="${addToCART[m].image}">
            <div class="item-details">
                <b><p>${addToCART[m].name}</p></b>
                <p class="quantity">Quantity: ${addToCART[m].quantity}</p>
                <p class="quantity">Size:XL</p>
    
    
            </div>
            <p class="price"><b>₹${addToCART[m].totalprice}</b></p>
        </div>
    `
    }  
}




let ordersummary = document.getElementsByClassName("order-summary")[0];
ordersummary.innerHTML=`
 <div>
                <span>Subtotal</span>
                <span>₹${totalmoney}</span>
            </div>
            <div>
                <span>Shipping</span>
                <span>200</span>
            </div>
            <div>
                <span>Discount</span>
                <span>-100</span>
            </div>
            <div class="total">
                <span>Total</span>
                <span>${totalmoney+200-100}</span>
            </div>
`


function changeSizeColor(thiss){
document.querySelectorAll(".sizee").forEach(lavel =>{
    lavel.style.backgroundColor = "White";
    lavel.style.color = "black";
})
thiss.style.backgroundColor = "black";
thiss.style.color = "white";
sessionStorage.setItem("size",thiss.textContent);
console.log(thiss.innerText);

}



function addThisToCart(namee,pricee,offf,colorr,imagee,idd){
let quantity = document.getElementById("quantity-input");
let quantityValue = quantity.value;
console.log(idd)
let addtocartData = localStorage.getItem("addtocart");
let addtocart  = addtocartData? JSON.parse(addtocartData) : [];
let found = addtocart.some(item => item.id == idd );
console.log(found)

if(!found){
    addtocart.push({
        name: namee,
        price:pricee,
        off:offf,
        color:colorr,
        image:imagee,
        id:idd,
        quantity:quantityValue,
        totalprice:pricee
    });
}

else if (found){
    addtocart.forEach((element)=>{
        if(element.id == idd){
            
            // element.quantity = element.quantity+quantityValue
            // element.totalprice = element.quantity*element.price;


            let quan = Number.parseInt(element.quantity);
            let quant = Number.parseInt(quantityValue);
            element.quantity = quan+quant;
            element.totalprice = Math.floor(element.quantity*element.price);
            
        }
    })
    
}
let data = localStorage.setItem("addtocart",JSON.stringify(addtocart));
showNotification("Successfully added to cart!") 

console.log(data)
}


function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    
    // Add class to show it
    notification.classList.add("show");
  
    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }


