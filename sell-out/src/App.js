import Router from './Routes/Router';
import Loader from './components/shared/Loader';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { useSelector } from 'react-redux';

function App() {
	const { isLoading } = useSelector(
		(state) => state.loader
	);
	return (
		<>
			<Header />
			<Router />
			{isLoading && <Loader />}
			<Footer />
		</>
	);
}

export default App;
