import React from 'react';

const NavBar = () => {
	return (
		<div className='flex items-center p-4 justify-between z-[100] absolute w-screen'>
			<h1 className='text-red-600 font-bold text-4xl cursor-pointer'>
				NETFLIX
			</h1>
			<div>
				<button className=' text-white px-6 py-2 mr-2'>Sign In</button>
				<button className='bg-red-600 text-white px-6 py-2'>Sign Up</button>
			</div>
		</div>
	);
};

export default NavBar;
