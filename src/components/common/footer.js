import React from 'react';
import '../common/headerfooter.css'
const Footer = () => {
    return (
        <footer class="footer-distributed">

			<div class="footer-left">

				<h3>OurPizzaYourPizaa<span></span></h3>

				<p class="footer-links">
					<a href="javascript:void(0)" class="link-1">Home</a>
					
					<a href="javascript:void(0)">Blog</a>
				
					<a href="javascript:void(0)">Pricing</a>
				
					<a href="javascript:void(0)">About</a>
					
					<a href="javascript:void(0)">Faq</a>
					
					<a href="javascript:void(0)">Contact</a>
				</p>

				<p class="footer-company-name">OurPizzaYourPizaa © 2020</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>HSR</span> HSR, India</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91-XXXYYYYYZZZ</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    )
}

export default Footer