








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
    submitForm() 
   
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
  totalDiscountprice=dilivaryCharge+sprice+paking;
  yousave=totalDiscount+dilivaryCharge;

  
        

$(".price_cantaint").css("width", "20rem" );
$(".price_cantaint").html(`<table class="table_style">
    <tr>
        <th colspan="2" class="table_head">PRICE DETAILS</th>
    </tr>
    <tr>
        <td class="price_dt_name" id="itemsno">Price (${bagItemObjects.length} items)</td>
        <td class="price_data"id="totalprice">${totalPrice}</td>
    </tr>
    <tr>
        <td class="price_dt_name">Discount</td>
        <td class="price_data green" id="totalDiscount">− ₹${totalDiscount}</td>
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
        <td id="f_price" id="totalprice" id="totalDiscountprice">₹${totalDiscountprice}</td>
    </tr>
    <tr class="green table_last">
        <td colspan="2">You will save ₹${yousave} on this order</td>
    </tr>
    
    
    </table>`)
    
     // product

 
  
     let itemsnames = [];
     let itemsids = [];
     
     bagItemObjects.forEach(item => {
       itemsnames.push(item.pname);
       itemsids.push(item.id);
     });
     
     console.log(itemsids, itemsnames);

        let itemsno=bagItemObjects.length
        let totalprice=totalPrice
        let totaldiscount=totalDiscount
        let totaldiscountprice=totalDiscountprice;
        // console.log(itemsno,totalprice,totaldiscountprice,totaldiscount)

    function submitForm() {
        // Get form values of user
        var username = document.getElementById("username").value;
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var state = document.getElementById("state").value;
        var district = document.getElementById("district").value;
        var zip = document.getElementById("zip").value;
        var ccname = document.getElementById("cc-name").value;
        var ccnumber = document.getElementById("cc-number").value;
        var cccvv = document.getElementById("cc-cvv").value;
        var ccexpiration = document.getElementById("cc-expiration").value;


       
       
       
        // Check if form fields are not empty
        if (username.trim() !== '' 
        && fullName.trim() !== ''
        && email.trim() !== ''
        && address.trim() !== ''
        && state.trim() !== ''
        && district.trim() !== ''
        && zip.trim() !== ''
        && ccname.trim() !== ''
        && ccnumber.trim() !== ''
        && cccvv.trim() !== ''
        && ccexpiration.trim() !== ''
        
        ) {
          fetch('/checkout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, fullName,email,address,state,district,zip,ccname,cccvv,ccexpiration, action: 'submit' ,itemsno,totalprice,totaldiscountprice,totaldiscount,itemsids,itemsnames}),
          })
            .then(response => response.json())
            .then(data => {
              const messageElement = document.getElementById('lmessage');
              if (data.success) {
                messageElement.style.color = 'green';
                
                // Redirect to the home page after a successful login
                // window.location.href = '/';
                window.location.href = './orderplace.html'; // Change '/home' to your actual home page URL
                // console.log(window.location.href = '/home')
              } else {
                messageElement.style.color = 'red';
              }
              messageElement.textContent = data.message;
            })
            .catch(error => console.error('Error:', error));
          // Redirect to the next page (replace 'nextPage.html' with your actual page URL)
          // window.location.href = './orderplace.html';
        } else {
          // Handle case where form fields are not filled
          alert('Please fill in all required fields.');
        }
      }




      
    














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
















// // frontend/js/script.js
// document.addEventListener('DOMContentLoaded', function () {
//   // Wait for the DOM to be fully loaded before attaching event listeners

//   const form = document.getElementById('myForm');

//   form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Call the submitForm function to handle the form submission
//     submitForm();
//   });
// });


// // frontend/js/script.js
// function submitForm() {
//   const firstName = document.getElementById('firstName').value;
//   const lastName = document.getElementById('lastName').value;
//   const email = document.getElementById('email').value;
//   const address = document.getElementById('address').value;
//   const address2 = document.getElementById('address2').value;
//   const country = document.getElementById('state').value; // Assuming the "state" field contains the country
//   const state = document.getElementById('district').value;
//   const zip = document.getElementById('zip').value;

//   const sameAddress = document.getElementById('same-address').checked;
//   const saveInfo = document.getElementById('save-info').checked;

//   // You can retrieve payment method and card details similarly...

//   // Prepare the data to send to the backend
//   // Prepare the data to send to the backend
//   const formData = {
   
//     firstName,
//     lastName,
//     email,
//     address,
//     address2,
//     country,
//     state,
//     zip,
//     sameAddress,
//     saveInfo,
//     // Add other form fields as needed
//   };



//   fetch('http://localhost:3000/api/auth/get-user')
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       const user = data.user;
//       console.log(user); // Handle user information on the frontend
//     } else {
//       console.log('User not logged in');
//     }
//   })
//   .catch(error => console.error('Error getting user:', error));

//   // Make a POST request to your backend API endpoint
//   fetch('http://localhost:3000/api/auth/submit-billing-address', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // Handle the response from the backend as needed
//     })
//     .catch(error => console.error('Error submitting form:', error));
// }








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