import React from 'react';

const Navbar = () => {
	return (
		<nav>
			<div className='brand'>
				<i style={{ color: 'white' }} className='material-icons'>
					audiotrack
				</i>
				<a href='/'>Audio Editor</a>
			</div>
		</nav>
	);
};

export default Navbar;
