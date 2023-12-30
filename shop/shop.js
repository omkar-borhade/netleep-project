console.log("hellow ");
let itemContainer=document.querySelector(".outer_container");
let innerHtml=''
items.forEach(item=>{
    innerHtml+=`<div class="product_container">
  <div class="product_image">
      <img src="${item.image}" alt="product">
  </div>
  <div class="product_name">
      ${item.pname};
  </div>
  <div class="product_subname">
      ${item.subName}
  </div>
  <div class="product_rate">
      ${item.rate.star} ⭐(${item.rate.count})
  </div>  
  <div class="product_discount">
      <span class="p_price">${item.price} </span>
      <span class="p_opreice">${item.oprice}</span>
      <span class="P_disc">Min ${item.discount}% off</span>
      
</div>
</div>`;
});
itemContainer.innerHTML = innerHtml;
console.log(itemContainer);

document.querySelector(".outer_container").onclick=shop;


function shop() {
    window.location.href = 'login.html';
  }

  
