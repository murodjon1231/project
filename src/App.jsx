import React from 'react';
import './App.css';
import food from './assets/food.svg';
import food1 from './assets/food1.svg';
import girl from './assets/girl.svg';
import stars from './assets/stars.svg';
import burger from './assets/burger.svg';
import sandvich from './assets/sandvich.svg';
import ice_creme from './assets/ice creme.svg';
import cocteale from './assets/cocteale.svg';
import Fattoush_salad  from  './assets/Fattoush salad.svg';
import Vegetable_salad from './assets/Vegetable salad.svg';
import Egg_salad from './assets/Egg salad.svg';
import girl1 from './assets/girl1.svg';
import avatar from './assets/avatar.svg';
import avatar2 from './assets/avatar2.svg';
import avatar3 from './assets/avatar3.svg';
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css'></link>
import logo from './assets/logo.png';

const SimplifiedFoodi = () => {
  return (
    <div className="foodi-container">
      <header className="header">
        <div >
          <><img className='logo' src={logo} alt="" /></>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Menu</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Offers</a>
        </nav>
        <button className="contact-btn">Contact</button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <span className="tag">Hot spicy food 🌶️</span>
          <h1>Dive into Delights Of Delectable <span className="highlight">Food</span></h1>
          <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <div className="hero-buttons">
            <button className="primary-btn">Order Now</button>
            <button className="secondary-btn">Watch Video ▶️</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="food-item2">
            <img className='girl' src={girl} alt="" />
          </div>
          <div className='div'>
            <div className="food-item1">
              <div className="food-img spicy-noodles"><img src={food} alt="" /></div>
              <div className="food-info">
                <p>Spicy noodles</p>
                <img src={stars} alt="" />
                <p className="price">$18.00</p>
              </div>
            </div>
            <div className="food-item3">
              <div className="food-img vegetarian-salad"><img src={food1} alt="" /></div>
              <div className="food-info">
                <p>Vegetarian salad</p>
                <img src={stars} alt="" />
                <p className="price">$23.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <h3 className="section-subtitle">CUSTOMER FAVORITES</h3>
        <h2 className="section-title">Popular Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-icon"><img src={burger} alt="" /></div>
            <h3>Main Dish</h3>
            <p>(86 dishes)</p>
          </div>
          <div className="category-card">
            <div className="category-icon"><img src={sandvich} alt="" /></div>
            <h3>Break Fast</h3>
            <p>(12 break fast)</p>
          </div>
          <div className="category-card">
            <div className="category-icon"><img src={ice_creme} alt="" /></div>
            <h3>Dessert</h3>
            <p>(48 dessert)</p>
          </div>
          <div className="category-card">
            <div className="category-icon"><img src={cocteale} alt="" /></div>
            <h3>Browse All</h3>
            <p>(255 items)</p>
          </div>
        </div>
      </section>

      <section className="dishes">
        <h3 className="section-subtitle">SPECIAL DISHES</h3>
        <h2 className="section-title">Standout Dishes  <br/>
        From Our Menu</h2>
        <div className="dishes-grid">
          <div className="dish-card">
            <div className="dish-img fattoush"><img src={Fattoush_salad} alt="" /></div>
            <h3>Fattoush salad</h3>
            <p>Description of the item</p>
            <div className="dish-footer">
              <span className="price">$24.00</span>
              <span className="rating">⭐ 4.9</span>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img vegetable"><img src={Vegetable_salad} alt="" /></div>
            <h3>Vegetable salad</h3>
            <p>Description of the item</p>
            <div className="dish-footer">
              <span className="price">$26.00</span>
              <span className="rating">⭐ 4.6</span>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img egg-vegi"><img src={Egg_salad} alt="" /></div>
            <h3>Egg vegi salad</h3>
            <p>Description of the item</p>
            <div className="dish-footer">
              <span className="price">$23.00</span>
              <span className="rating">⭐ 4.5</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="chef-img"><img src={girl1} alt="" /></div>
        <div className="testimonial-content">
          <h3  className="section-subtitle">TESTIMONIALS</h3>
          <br />
          <h2 className="section-title">What Our Customers Say About Us</h2>
          
          <p className="quote">"I had the pleasure of dining at Foodi last night, <br/> and I am still raving about the experience! The attention to detail in <br/> presentation and service was impeccable"</p>
          <div className="customer-info">
            <div className="avatar-group">
              <span className="avatar"><img src={avatar3} alt="" /></span>
              <span className="avatar"><img src={avatar2} alt="" /></span>
              <span className="avatar"><img src={avatar} alt="" /></span>
            </div>
            <div className="feedback">
              <h4>Customer Feedback</h4>
              <p>4.9 (18.6k Reviews)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-intro">
          <h3 className="section-subtitle">OUR STORY & SERVICES</h3>
          <br />
          <h2 className="section-title">Our Culinary Journey <br/> And Services</h2>
          <p>Rooted in passion, we curate unforgettable dining <br/> experiences and offer exceptional services, <br/> blending culinary artistry with warm hospitality.</p>
          <button className="explore-btn">Explore</button>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🍽️</div>
            <h3>CATERING</h3>
            <p>Delight your guests with our flavors and presentation</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h3>FAST DELIVERY</h3>
            <p>We deliver your order promptly to your door</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>ONLINE ORDERING</h3>
            <p>Explore menu & order with ease using our Online Ordering</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎁</div>
            <h3>GIFT CARDS</h3>
            <p>Give the gift of exceptional food with our Food Gift Cards</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div >
              <img className='logo' src={logo} alt="" />
            </div>
            <p>Savor the artistry where every dish is a culinary masterpiece</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Useful links</h4>
              <a href="#">About us</a>
              <a href="#">Events</a>
              <a href="#">Blogs</a>
              <a href="#">FAQ</a>
            </div>
            <div className="link-group">
              <h4>Main Menu</h4>
              <a href="#">Home</a>
              <a href="#">Offers</a>
              <a href="#">Menus</a>
              <a href="#">Reservation</a>
            </div>
            <div className="link-group">
              <h4>Contact Us</h4>
              <p>example@email.com</p>
              <p>+64 958 248 966</p>
              <p>Social media</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="social">
            <span className="social-icon"><i class="fi fi-brands-facebook"></i></span>
            <span className="social-icon"><i class="fi fi-brands-instagram"></i></span>
            <span className="social-icon"><i class="fi fi-brands-twitter"></i></span>
            <span className="social-icon"><i class="fi fi-brands-youtube"></i></span>
          </div >
          <p className='reserved'>Copyright © 2023 Doodle | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default SimplifiedFoodi;