import React, { useEffect, useState } from 'react';
import {
	fetchPopMovie,
	fetchUpcoming,
	fetchTopRated,
	fetchNowPlaying,
} from '../utils/moviedb.js';
import Movie from './Movie';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';
const Row = ({ title, index }) => {
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
			setMovies(response.results);
		};
		fetchData();
	}, [title]);

	const slideLeft = () => {
		const slider = document.querySelector(`.slider${index}`);
		slider.scrollLeft -= 500;
	};
	const slideRight = () => {
		const slider = document.querySelector(`.slider${index}`);
		slider.scrollLeft += 500;
	};
	return (
		<div className='py-4'>
			<h2 className='text-white text-3xl relative'>{title}</h2>
			<div className='flex items-center relative group'>
				<BsFillArrowLeftCircleFill
					className='bg-white absolute rounded-full z-10 cursor-pointer left-0 opacity-50 hover:opacity-100 hidden group-hover:block'
					size={40}
					onClick={slideLeft}
				/>
				<div
					id='slider'
					className={`slider${index} whitespace-nowrap overflow-x-scroll scroll-smooth`}
				>
					{movies.map((movie) => (
						<Movie movie={movie} key={movie.id} />
					))}
				</div>
				<BsFillArrowRightCircleFill
					className='bg-white absolute rounded-full cursor-pointer right-0 opacity-50 hover:opacity-100 hidden group-hover:block'
					size={40}
					onClick={slideRight}
				/>
			</div>
		</div>
	);
};

export default Row;
