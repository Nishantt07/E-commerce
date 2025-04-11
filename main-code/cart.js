let tablebody = document.getElementsByClassName("table-body")[0];
let cartData = JSON.parse(localStorage.getItem("addtocart"));
let arrayLengthh = cartData.length;

console.log(cartData);
// let neww;
// let j = neww;
for(let k = 0;k<arrayLengthh;k++){
  tablebody.innerHTML +=`
<tr >

              

                      <td class="product-infoo"> 
                      
 <a href="product.html?id=${cartData[k].id}">

                        <img src="${cartData[k].image}" alt="">
                        <div class="product-detailss">

                          <h4>Fashion</h4>
                          <p>${cartData[k].name}</p>
                          <span>Color:${cartData[k].color}</span><br>
                          <span>Size: XL</span>
                        </div>
                      </td>
</a>

                      <td class="quantity-celll">
                        <div class="quantity-wrapperr">
                          <button class="qty-btn plus" onclick= decreaseQuantity(${cartData[k].id},${k})>-</button>
                          <input type="text" value="${cartData[k].quantity}" class="plusminus">
                          <button class="qty-btn minus" onclick=increaseQuantity(${cartData[k].id},${k}) >+</button>
                       <i class="fa-solid fa-trash-can" onclick = deleteCart(${k})></i>

                          

                        </div>
                      </td>
                      <td class="total-pricee"> ₹${cartData[k].totalprice}

                      </td>

</tr>
`
}

// neww++;

function deleteCart(jj){
  console.log("function is called")
cartData.splice(jj,1);
localStorage.setItem("addtocart",JSON.stringify(cartData));
window.location.reload();
}

function increaseQuantity(idd,k){

  cartData.forEach((element)=>{
    if(element.id == idd){
      console.log(element)
      if(element.quantity<10){
        element.quantity++;

        element.totalprice = Math.floor(element.price*element.quantity);
        localStorage.setItem("addtocart",JSON.stringify(cartData));
        let plusminus = document.getElementsByClassName("plusminus")[k];
        plusminus.value = element.quantity;
        let totalprice = document.getElementsByClassName("total-pricee")[k];

        totalprice.innerHTML = `₹${cartData[k].totalprice}`;

      }
    }
  })



}

function decreaseQuantity(idd){




  

  cartData.forEach((element,k)=>{
    if(element.id == idd){
      console.log(element)
      if(element.quantity>=2){
        element.quantity--;
        element.totalprice = Math.floor(element.totalprice-element.price);
        localStorage.setItem("addtocart",JSON.stringify(cartData));
        let plusminus = document.getElementsByClassName("plusminus")[k];
        plusminus.value = element.quantity;
        let totalprice = document.getElementsByClassName("total-pricee")[k];
        totalprice.innerHTML = `₹${cartData[k].totalprice}`;


      }
    }
  })
  }




