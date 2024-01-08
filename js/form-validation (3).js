
// var fullName = document.getElementById('fullName').value;
// var lastName = document.getElementById('lastName').value;
// var email = document.getElementById('email').value;

// var address = document.getElementById('address').value;

// var address2 = document.getElementById('address2').value;
// var state = document.getElementById('state').value;
// var district = document.getElementById('district').value;
// var zip = document.getElementById('zip').value;
// var sameaddress= document.getElementById('same-address').value;
// var saveinfo= document.getElementById('save-info').value;
// var sameaddress= document.getElementById('same-address').value;
// var sameaddress= document.getElementById('same-address').value;
// var sameaddress= document.getElementById('same-address').value;











const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');
let itemsArray=[]
const selectedProduct = items.find(item => item.id === parseInt(productId));
itemsArray.push(selectedProduct);
console.log(itemsArray)
onLoad();
function onLoad(){
   
    loadBagItemObjects();
    // displayBagItems()
    displayBagIcon()
    // tprice();
   
}
console.log(bagItems)
function addToBag(itemId){
    bagItems.push(itemId)
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon()
    Details()

    
}
function displayBagIcon(){
    let bagItemCountElement=document.querySelector(".bag_item_count"); 
    if (bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText= bagItems.length;
    }else{
         bagItemCountElement.style.visibility='hidden';
    }
}

   


function loadBagItemObjects() {
    let bagItemsStr = localStorage.getItem("bagItems");
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    
    bagItemObjects = bagItems.map(itemId => {
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log("bag item objects",bagItemObjects);
  }


  if(itemsArray==0){
    bagItemObjects=bagItemObjects
    
  }
  else{
    bagItemObjects=itemsArray
  }


  let totalPrice=0;
  let sprice=0;
  let totalDiscount=0;
  let dilivaryCharge;
  let paking=49;
  let totalDiscountprice;
  let yousave=0;
  
  bagItemObjects.forEach(item => {
      totalPrice+=item.oprice;
      sprice+=item.price
      totalDiscount=item.oprice-item.price
  });
  
  if (totalPrice<500){
      dilivaryCharge=40;
  }
  else{
      dilivaryCharge=0;
  }
  totalDiscountprice=dilivaryCharge+sprice;
  yousave=totalDiscount+dilivaryCharge+paking;



$(".price_cantaint").css("width", "20rem" );
$(".price_cantaint").html(`<table class="table_style">
    <tr>
        <th colspan="2" class="table_head">PRICE DETAILS</th>
    </tr>
    <tr>
        <td class="price_dt_name">Price (${bagItemObjects.length} items)</td>
        <td class="price_data">${totalPrice}</td>
    </tr>
    <tr>
        <td class="price_dt_name">Discount</td>
        <td class="price_data green">− ₹${totalDiscount}</td>
    </tr>
    <tr>
    
        <td class="price_dt_name">Delivery Charges</td>
        <td class="price_data"><span class="stric">₹${dilivaryCharge}</span><span class="green"> Free</span>
        </td>
    </tr>
    <tr>
    
        <td class="price_dt_name">Secured Packaging Fee</td>
        <td class="price_data">₹${paking}</td>
    </tr>
    <tr>
        <td id="f_price">Total Amount
        </td>
        <td id="f_price">₹${totalDiscountprice}</td>
    </tr>
    <tr class="green table_last">
        <td colspan="2">You will save ₹${yousave} on this order</td>
    </tr>
    
    
    </table>`)
    













    // // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()