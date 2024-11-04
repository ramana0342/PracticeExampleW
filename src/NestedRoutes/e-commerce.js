import React from 'react'

function Ecommerce() {
  return (
    <>
     <nav class="navbar">
        
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Cart</a>
    </nav>

    <section class="features">
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/711ZTkL0l8L._SX569_.jpg" alt="Product 1" class="product-image"/>
            <p class="price">Price : 24K</p>
        </div>
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/31hcJbP0BuL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 2" class="product-image"/>
            <p class="price">Price : 22k</p>
        </div>
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/41hmUyFtwdL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 3" class="product-image"/>
            
            <p class="price">Price : 30k</p>
        </div>
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/4184iNRaFsL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 4" class="product-image"/>
           
            <p class="price">Price : 20k</p>
        </div>
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/4184iNRaFsL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 4" class="product-image"/>
            
            <p class="price">Price : 20k</p>
        </div>
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/4184iNRaFsL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 4" class="product-image"/>
            
            <p class="price">Price : 20k</p>
        </div>
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/41hmUyFtwdL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 3" class="product-image"/>
            
            <p class="price">Price : 30k</p>
        </div>
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/4184iNRaFsL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 4" class="product-image"/>
            <p class="price">Price : 20k</p>
        </div>
     
    </section>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p></p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: -----------</p>
                <p>Phone: -----------</p>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <a href="#">Facebook</a> | 
                <a href="#">Twitter</a> | 
                <a href="#">Instagram</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 My Store. All Rights Reserved.</p>
        </div>
    </footer>

    </>
  )
}

export default Ecommerce