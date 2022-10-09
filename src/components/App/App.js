import './styles/index.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {
	return (
		<div className='app'>
			<Header mix='app__header' />
			<Main mix='app__main' />
			<Footer mix='app__footer' />
		</div>
	);
};

export default App;
