const items={
image:"../image/images.jpg" ,
pname:"OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM",
subName:"m32",
rate:{star:4.2,count:31},
price:150000,
oprice:170000,
discount:50

}
const itemsDiffLook={
    image1:"../image/Nothing phone 2(Main).jpg" ,
    image2:"../image/main.jpg" ,
    image3:"../image/Samsung Galaxy S23(Main).jpg" ,
    image4:"../image/images.jpg" ,
}

let containerMain=document.querySelector(".main");

containerMain.innerHTML=`


<div class="inside_min">

                <div class="item_obj">
                    <div class="item_image">
                        <div class="item">
                            <img class="pimg" src="${items.image}" alt="products" id="mainimg">
                        </div>
                        <div class="item_butn">
                            
                                <button class="item_btn1 styled "type="button"
                                onclick="window.location.href='./cart.html';"
                                >add to cart</button>
                                
                                
                           
                            <button class=" item_btn2  styled" type="button"
                            onclick="window.location.href='buy.html ';"
                            >buy now</button>

                        </div>
                    </div>
                    <div class="item_details">
                        <div class="details ">
                            <div class="item_name"><strong>${items.pname}</strong></div>
                            <div class="item_subname">${items.subName}</div>
                        </div>
                        <div class="details item_price">
                            <span class="p_price">${items.price} </span>
                            <span class="p_opreice">${items.oprice}</span>
                            <span class="P_disc">Min ${items.discount}% off</span>
                        </div>
                        <div class="details item_simge">
                            <div class="sep_img">
                            </div>
                            <div class="sep_img">
                                <img class="spimg" src="${itemsDiffLook.image1}" alt="products">
                            </div>
                            <div class="sep_img">
                                <img class="spimg" src="${itemsDiffLook.image2}" alt="products">
                            </div>
                            <div class="sep_img">
                                <img class="spimg" src="${itemsDiffLook.image3}" alt="products">
                            </div>
                            <div class="sep_img">
                                <img class="spimg" src="${itemsDiffLook.image4}" alt="products">
                            </div>

                        </div>
                        <div class="details item_details_info">
                            <h4>details</h4>
                            <table>
                                <tr><th>Specifications</th></tr>
                                <tr> <td class="dth">genral</td>
                                    <td >genral</td>
                                </tr>
                                
                                <tr><td class="dth" >sales</td>
                                    <td>sales</td></tr>
                                <tr>
                                    <td class="dth">madal</td>
                                    <td>madal</td>
                                </tr>
                                <tr>
                                    <td class="dth">ram</td>
                                    <td>ram</td>
                                </tr>
                               
                                
                               
                                
                                
                            </table>
                           
                        </div>
                        <div class="details item_discount">
                            <h4>available offers<br></h4>
                            
<p>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C
</p>
<p>Bank OfferFlat ₹750 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹12,500 and aboveT&C
</p>
<p>Bank OfferExtra ₹1000 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹29,990 and aboveT&C
</p>
<p>Buy this product and Get Extra ₹75 Off on Select Room HeatersT&C
</p>      



                        </div>
                        <div class="details item_rating">
                            <h4>rating</h4>
                            <p>
                                ${items.rate.star} ⭐(${items.rate.count})
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="simlar_item">
                    <div class="simlar_product"></div>
                    <div class="simlar_product"></div>
                    <div class="simlar_product"></div>
                    <div class="simlar_product"></div>
                    <div class="simlar_product"></div>
                </div>
                
            </div>`


   let pimg=document.getElementById("mainimg");    
   let spimg=document.getElementsByClassName("spimg");  


   console.log(pimg);
   console.log(spimg);
   
spimg[0].onclick=function(){
    pimg.src=spimg[0].src;
};
spimg[1].onclick=function(){
    pimg.src=spimg[1].src;
};
spimg[2].onclick=function(){
    pimg.src=spimg[2].src;
};
spimg[3].onclick=function(){
    pimg.src=spimg[3].src;
};
spimg[4].onclick=function(){
    pimg.src=spimg[4].src;
};






// console.log(containerMain);
