

class SpacialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`


        <div class="container header navbar">
            <ul class="navbar">
            <!-- <div class="back-button" onclick="goBack()">Back</div>  -->
                <li class="logo_container">
                    <a href="./index.html"><span class="emart_logo">Emart</span></span><sup><img
                                class="emart_logo_star" src="./image/emart_logo.png" alt="Myntra Home"></sup></a>
                </li>

                <li class="search_bar">
                    <span class="material-symbols-outlined search_icon">search</span>
                    <input class="search_input" placeholder="Search for products, brands and more">
                </li>

                <div class="action_bar" id="container" id="profiles"> 
                    <div class="action_container profile-container">  
                    
                        <span  class="material-symbols-outlined action_icon">person</span>
                        <span class="action_name">Profile</span>
            
            
                        <div class="dropdown-menu" id="dropdown-menu">
                            <ul>
                              <li><a href="#">Profile</a></li>
                              <li><a href="./demologin.html ">Login/sign</a></li>
                            </ul>
                          </div>
            
            
            
            
                
                        
                    
                </div>
                   <div class="action_container">
              <span class="material-symbols-outlined action_icon">favorite</span>
              <span class="action_name">Wishlist</span>
      
             
          </div>

          <a class="action_container" href="/cart">
                        <span class="material-symbols-outlined action_icon">shopping_bag</span>
                        <span class="action_name">Bag</span>
                        
                        <span class="bag_item_count">0</span>
                    </a>

                </li>

            </ul>
        </div>
        

       
        
     
        
        
        
        `

    }
}




customElements.define('spacial-header',SpacialHeader)






class SpacialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="container footer">
        <div class="footer_container">
            <div class="footer_column">
                <h3>ABOUT</h3>

                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Corparate Information</a>
                <a href="#">Emart stories</a>
                <a href="#">Twitter</a>
                <a href="#">facebook</a>
                <a href="#">Youtube</a>
            </div>

            <div class="footer_column">
                <h3>HELP</h3>

                <a href="#">Payment</a>
                <a href="#">Shipping</a>
                <a href="#">cancellation & returns</a>
                <a href="#">FAQ</a>
                <a href="#">Report infringement</a>

            </div>

            <div class="footer_column">
                <h3>COUSUMER POLICY</h3>

                <a href="#">terms & conditions</a>
                <a href="#">security</a>
                <a href="#">privacy</a>
                <a href="#">graviance Redressal</a>
                <a href="#">Help Center</a>
                <a href="#">Become Seller</a>
                <a href="#">seller condition</a>
            </div>
            
        </div>
        <div class="copyright">
            © 2023 www.emart.com. All rights reserved.
        </div>
        <hr>
</div>

        
        `

    }
}




customElements.define('spacial-footer',SpacialFooter)
