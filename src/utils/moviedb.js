import axios from './request';

// 获取当前流行电影
export const fetchPopMovie = () => {
	return axios.get('/movie/popular');
};

// 获取upcoming电影
export const fetchUpcoming = () => {
	return axios.get('/movie/upcoming');
};

// 获取top_rated电影
export const fetchTopRated = () => {
	return axios.get('/movie/top_rated');
};

// 获取latest电影
export const fetchNowPlaying = () => {
	return axios.get('/movie/now_playing');
};
