import axios from './request';

// 获取当前流行电影
export const fetchPopMovie = () => {
	return axios.get('/movie/popular');
};
