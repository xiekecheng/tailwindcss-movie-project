import Main from '../components/Main';
import Row from '../components/Row';

const Home = () => {
	const movieTitles = ['Popular', 'UpComing', 'Top Rated', 'Now Playing'];
	return (
		<>
			<Main />
			{movieTitles.map((title, index) => (
				<Row key={index} title={title} index={index} />
			))}
		</>
	);
};

export default Home;
