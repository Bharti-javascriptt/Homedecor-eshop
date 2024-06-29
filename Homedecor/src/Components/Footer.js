import React from 'react';
import './Footer.css'; // Import CSS file for styling (optional)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies libero et viverra aliquet.
          </p>
          <div className="contact">
            <span><i className="fas fa-map-marker-alt"></i> 123 Home Decor Street, City, Country</span>
            <span><i className="fas fa-envelope"></i> info@homedecor.com</span>
            <span><i className="fas fa-phone"></i> +123 456 7890</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Home Decor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;