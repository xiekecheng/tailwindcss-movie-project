import React from 'react';

const Login = () => {
	return (
		<div className='w-full h-screen '>
			<img
				className=' w-full h-full object-cover absolute hidden sm:block'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/fd208352-7ef5-431e-94d1-ad0d4517d544/SG-en-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt=''
			/>
			<div className='w-full h-full fixed left-0 top-0 mix-blend-overlay bg-black/60'></div>
			{/* <div className='max-w-[450px] w-full h-[600px] fixed bg-black/50 mx-auto text-white z-50'>
				<h1>Sign Up</h1>
			</div> */}
			<div className='fixed w-full left-0 top-0 mx-auto px-4 py-20 text-white'>
				<div className=' max-w-[450px] h-[600px] mx-auto  bg-black/75 p-10'>
					<h1 className='text-3xl font-bold'>Sign In</h1>
					<form className='flex flex-col'>
						<input
							className='bg-gray-600 rounded my-2 p-3 text-gray-600'
							type='email'
							placeholder='Email'
						/>
						<input
							className='bg-gray-600 rounded my-2 p-3 text-gray-600'
							type='password'
							placeholder='Password'
						/>
						<button className='bg-red-600 rounded p-3 my-6 font-bold'>
							Sign In
						</button>
					</form>
					<div className='flex justify-between items-center text-gray-600 text-sm'>
						<p className='items-center'>
							<input type='checkbox' className='mr-1' />
							Remember Me
						</p>
						<p>Need help?</p>
					</div>
					<div className='text-gray-600 text-sm mt-10'>
						New to NetFlix?
						<label className='text-white'>Sign up now</label>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
