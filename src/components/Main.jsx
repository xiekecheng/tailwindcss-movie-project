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
		<div className='w-screen h-[550px]'>
			<div className='w-full h-full object-fill'>
				<div className='w-full h-full bg-gradient-to-r from-black absolute'></div>
				<img
					className='w-full h-full'
					src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
					alt={randomMovie?.title}
				/>
				<div className='absolute top-[20%] p-4 md:p-8'>
					<button className='border text-black bg-white py-2 px-4 mr-4 '>
						Play
					</button>
					<button className='border text-white bg-pink py-2 px-4'>
						Watch Later
					</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
