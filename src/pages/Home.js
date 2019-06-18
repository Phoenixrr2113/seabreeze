import React from 'react';

const Home = () => {
	return (
		<div>
			<div className='nav'>
				<h3 className='logo'>Sea Breeze</h3>
				<div className='links'>
					<span>Our Story</span>
					<span>Menu</span>
					<span>Catering</span>
					<span>Contact</span>
				</div>
			</div>
			<div className='body'>
				<h2>
					Sea Breeze <span>BBQ</span>
				</h2>
				<h3>Jamaican Cuisine</h3>
				<div className='buttons'>
					<span>See Menu</span>
					<span>Order Online</span>
					<span>Reservations</span>
				</div>
			</div>
			<div className='footer'>
				<span>
					185 W Chance A La Mer, Ocean Shores, WA 98569. Tel 360-289-9900
				</span>
				<span className='social-icons'>facebook</span>
				<span className='social-icons'>instagram</span>
				<span className='social-icons'>twitter</span>
			</div>
		</div>
	);
};

export default Home;
