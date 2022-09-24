import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
