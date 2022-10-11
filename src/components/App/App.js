import { useReducer } from 'react';

import reduceForm from '../../utilities/reducers/reduceForm';

import AppContext from '../../contexts/AppContext';

import './styles/index.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import useCount from '../../utilities/hooks/useCount';

const { DEFAULT } = require('../../configs/config');

// TODO pass w3c validation

// TODO disable months input when full summ
// TODO create inputs to type values

const App = () => {
	const [state, dispatch] = useReducer(reduceForm, {
		total: DEFAULT.DEFAULT_TOTAL,
		percent: DEFAULT.DEFAULT_PERCENT,
		months: DEFAULT.DEFAULT_MONTHS,
	});

	const { initPayment, monthPayment, totalPayment } = useCount(state.total, state.percent, state.months);

	return (
		<AppContext.Provider value={{ state, dispatch, initPayment, monthPayment, totalPayment }}>
			<form
				className='app'
				id='form'
				name='form'
				action='#'
				method='post'
				target='_self'
				autoComplete='off'
				noValidate
				onSubmit={e => {
					e.preventDefault();
					console.log('submitted');
				}}>
				<Header mix='app__header' />
				<Main mix='app__main' />
				<Footer mix='app__footer' />
			</form>
		</AppContext.Provider>
	);
};

export default App;
