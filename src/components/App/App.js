import { useReducer } from 'react';
import reduceForm from '../../utilities/reducers/reduceForm';
import AppContext from '../../contexts/AppContext';
import './styles/index.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import useCount from '../../utilities/hooks/useCount';
import api from '../../utilities/api/api';
import { DEFAULT } from '../../configs/config';

const App = () => {
	const [state, dispatch] = useReducer(reduceForm, {
		total: DEFAULT.DEFAULT_TOTAL,
		percent: DEFAULT.DEFAULT_PERCENT,
		months: DEFAULT.DEFAULT_MONTHS,
		disabled: false,
	});

	const { initPayment, monthPayment, totalPayment } = useCount(state.total, state.percent, state.months);

	const handleSubmit = (e, data) => {
		e.preventDefault();
		dispatch({ type: 'HANDLE_LOCK', payload: { disabled: true } });
		api.handleSubmit(data)
			.then(res => console.log('Data was sent'))
			.then(() => dispatch({ type: 'HANDLE_UNLOCK', payload: { disabled: false } }))
			.catch(err => {
				console.log('Something went wrong');
				dispatch({ type: 'HANDLE_UNLOCK', payload: { disabled: false } });
			});
	};

	return (
		<AppContext.Provider value={{ state, dispatch, initPayment, monthPayment, totalPayment, handleSubmit }}>
			<form
				className='app'
				id='form'
				name='form'
				action='#'
				method='post'
				target='_self'
				autoComplete='off'
				noValidate
				onSubmit={e =>
					handleSubmit(e, {
						car_coast: state.total,
						initial_payment: initPayment,
						initial_payment_percent: state.percent,
						lease_term: state.months,
						total_sum: totalPayment,
						monthly_payment: monthPayment,
					})
				}>
				<Header mix='app__header' />
				<Main mix='app__main' />
				<Footer mix='app__footer' />
			</form>
		</AppContext.Provider>
	);
};

export default App;
