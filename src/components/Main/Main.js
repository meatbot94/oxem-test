import './styles/index.css';

import Option from '../Option/Option';

const { CONTENT } = require('../../configs/config.json');

const Main = ({ mix }) => {
	return (
		<main className={`${mix} main`}>
			<section className='main__options'>
				<Option mix='main__option' title={CONTENT.MAIN.INPUT.CREDIT_SUM} />
				<Option mix='main__option' title={CONTENT.MAIN.INPUT.FIRST_PAYMENT} />
				<Option mix='main__option' title={CONTENT.MAIN.INPUT.LEASING_PERIOD} />
			</section>
		</main>
	);
};

export default Main;
