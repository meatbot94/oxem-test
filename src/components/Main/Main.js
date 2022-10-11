import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import './styles/index.css';
import Slider from '../Slider/Slider';
import { CONTENT } from '../../configs/config';

const Main = ({ mix }) => {
	const { state, dispatch, initPayment } = useContext(AppContext);

	return (
		<main className={`${mix} main`}>
			<section className='main__sliders'>
				<Slider
					mix='main__slider'
					disabled={state.disabled}
					dispatch={dispatch}
					config={{
						percent: false,
						content: {
							title: CONTENT.MAIN.SLIDERS.CREDIT,
							unit: CONTENT.MAIN.SLIDERS.CREDIT_UNIT,
							amount: state.total,
						},
						input: {
							id: 'creditInput',
							name: 'total',
							min: 1000000,
							max: 6000000,
							step: 100000,
							form: 'form',
							value: state.total,
						},
					}}
				/>
				<Slider
					mix='main__slider'
					disabled={state.disabled}
					dispatch={dispatch}
					config={{
						percent: true,
						content: {
							title: CONTENT.MAIN.SLIDERS.PAYMENT,
							unit: CONTENT.MAIN.SLIDERS.PAYMENT_UNIT,
							amount: initPayment,
						},
						input: {
							id: 'paymentInput',
							name: 'percent',
							min: 10,
							max: 60,
							step: 5,
							form: 'form',
							value: state.percent,
						},
					}}
				/>
				<Slider
					mix='main__slider'
					disabled={state.disabled}
					dispatch={dispatch}
					config={{
						percent: false,
						content: {
							title: CONTENT.MAIN.SLIDERS.PERIOD,
							unit: CONTENT.MAIN.SLIDERS.PERIOD_UNIT,
							amount: state.months,
						},
						input: {
							id: 'periodInput',
							name: 'months',
							min: 1,
							max: 60,
							step: 1,
							form: 'form',
							value: state.months,
						},
					}}
				/>
			</section>
		</main>
	);
};

export default Main;
