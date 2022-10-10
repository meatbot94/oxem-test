import './styles/index.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {
	// TODO pass w3c validation
	// TODO refactor config.json to objects config.js
	// TODO use useReducer

	return (
		<div className='app'>
			<Header mix='app__header' />
			<Main mix='app__main' />
			<Footer mix='app__footer' />
		</div>
	);
};

export default App;
