import Main from '../components/Main';
import Row from '../components/Row';

const Home = () => {
	return (
		<>
			<Main />
			<Row title='Popular' />
			<Row title='UpComing' />
			<Row title='Top Rated' />
			<Row title='Now Playing' />
		</>
	);
};

export default Home;
