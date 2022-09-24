import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className='flex items-center p-4 justify-between z-[100] absolute w-screen'>
			<Link to='/'>
				<h1 className='text-red-600 font-bold text-4xl cursor-pointer'>
					NETFLIX
				</h1>
			</Link>
			<div>
				<Link to='/login'>
					<button className=' text-white px-6 py-2 mr-2'>Sign In</button>
				</Link>
				<Link to='/signup'>
					<button className='bg-red-600 text-white px-6 py-2'>Sign Up</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
