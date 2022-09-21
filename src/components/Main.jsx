import React, { useState, useEffect } from 'react';
import { fetchPopMovie } from '../utils/moviedb.js';
const Main = () => {
	const [movies, setMovies] = useState([]);
	const randomMovie = movies[Math.floor(Math.random() * movies.length)];
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetchPopMovie();
			setMovies(response.results);
		};
		fetchData();

		return () => {};
	}, []);
	return (
		<div className='w-screen h-[550px] text-white'>
			<div className='w-full h-full object-fill'>
				<div className='w-full h-full bg-gradient-to-r from-black absolute'></div>
				<img
					className='w-full h-full'
					src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
					alt={randomMovie?.title}
				/>
				<div className='absolute top-[20%] p-4 md:p-8'>
					<h1 className='text-3xl md:text-5xl '>{randomMovie?.title}</h1>
					<div className='py-4'>
						<button className='border text-black bg-white py-2 px-4 mr-4 '>
							Play
						</button>
						<button className='border text-white bg-pink py-2 px-4'>
							Watch Later
						</button>
					</div>
					<p className='text-gray-300'> {randomMovie?.release_date}</p>
					<p className='w-full md:w-[75%] lg:w-[50%] text-gray-200'>{randomMovie?.overview}</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
