import './styles/index.css';

import Option from '../Option/Option';

import { CONTENT } from '../../configs/config';

const Main = ({ mix }) => {
	return (
		<main className={`${mix} main`}>
			<section className='main__options'>
				<Option
					mix='main__option'
					percent={false}
					unit={CONTENT.MAIN.SLIDER.CREDIT_UNIT}
					title={CONTENT.MAIN.INPUT.CREDIT}
					inputId='credit'
					inputName='credit'
				/>
				<Option
					mix='main__option'
					percent={true}
					unit={CONTENT.MAIN.SLIDER.PAYMENT_UNIT}
					title={CONTENT.MAIN.INPUT.PAYMENT}
					inputId='payment'
					inputName='payment'
				/>
				<Option
					mix='main__option'
					percent={false}
					unit={CONTENT.MAIN.SLIDER.PERIOD_UNIT}
					title={CONTENT.MAIN.INPUT.PERIOD}
					inputId='period'
					inputName='period'
				/>
			</section>
			<section className='main__results'></section>
		</main>
	);
};

export default Main;
