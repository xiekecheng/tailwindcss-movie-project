import axios from 'axios';
const api_key = 'f7cd0ffeed15f5ea5e6f53c80b8454a6';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 10000,
	params: {
		api_key: api_key,
	},
});

// 添加响应拦截器
instance.interceptors.response.use(
	function (response) {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		return response.data;
	},
	function (error) {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

export default instance;
