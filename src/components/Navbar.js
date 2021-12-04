import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className='brand'>
				<i style={{ color: 'white' }} className='material-icons'>
					audiotrack
				</i>
				<Link to='/'>Audio Editor</Link>
			</div>
		</nav>
	);
};

export default Navbar;
