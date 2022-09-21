import React, { useEffect, useState } from 'react';
import {
	fetchPopMovie,
	fetchUpcoming,
	fetchTopRated,
	fetchNowPlaying,
} from '../utils/moviedb.js';
import Movie from './Movie';
const Row = ({ title }) => {
	const mapRequest = {
		UpComing: fetchUpcoming,
		Popular: fetchPopMovie,
		'Top Rated': fetchTopRated,
		'Now Playing': fetchNowPlaying,
	};
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await mapRequest[title]();
			console.log('response', response);
			setMovies(response.results);
		};
		fetchData();
	}, [title]);
	return (
		<div className='py-4'>
			<h2 className='text-white text-3xl relative'>{title}</h2>
			<div className='flex items-center relative'>
				<div id='slider'>
					{movies.map((movie) => (
						<Movie movie={movie} key={movie.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Row;
