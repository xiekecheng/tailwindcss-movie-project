import React, { useState } from 'react';

import { BsHeart, BsHeartFill } from 'react-icons/bs';
const Movie = ({ movie }) => {
	const [like, setLike] = useState(false);
	return (
		<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block cursor-pointer p-2'>
			<img
				className='w-full'
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				alt={movie.original_title}
			/>
			<div className='absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 hover:bg-black/80 text-white  '>
				<div className='absolute top-3 left-3' onClick={() => setLike(!like)}>
					{like ? <BsHeartFill /> : <BsHeart />}
				</div>
				<p className='text-sm h-full text-center font-bold flex justify-center items-center'>
					{movie.original_title}
				</p>
			</div>
		</div>
	);
};

export default Movie;
