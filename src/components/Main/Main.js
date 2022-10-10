import './styles/index.css';

import Slider from '../Slider/Slider';

import { CONTENT } from '../../configs/config';

const Main = ({ mix }) => {
	return (
		<main className={`${mix} main`}>
			{/* sliders */}
			<section className='main__sliders'>
				<Slider
					mix='main__slider'
					config={{
						percent: false,
						content: {
							title: CONTENT.MAIN.SLIDERS.CREDIT,
							unit: CONTENT.MAIN.SLIDERS.CREDIT_UNIT,
						},
						input: {
							id: 'creditInput',
							name: 'credit',
							min: '0',
							max: '100',
							step: '1',
						},
					}}
				/>
				<Slider
					mix='main__slider'
					config={{
						percent: true,
						content: {
							title: CONTENT.MAIN.SLIDERS.PAYMENT,
							unit: CONTENT.MAIN.SLIDERS.PAYMENT_UNIT,
						},
						input: {
							id: 'paymentInput',
							name: 'payment',
							min: '0',
							max: '100',
							step: '5',
						},
					}}
				/>
				<Slider
					mix='main__slider'
					config={{
						percent: false,
						content: {
							title: CONTENT.MAIN.SLIDERS.PERIOD,
							unit: CONTENT.MAIN.SLIDERS.PERIOD_UNIT,
						},
						input: {
							id: 'periodInput',
							name: 'period',
							min: '0',
							max: '100',
							step: '1',
						},
					}}
				/>
			</section>
		</main>
	);
};

export default Main;
