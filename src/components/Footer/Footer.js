import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import './styles/index.css';
import Result from '../Result/Result';
import Submit from '../Submit/Submit';
import { CONTENT } from '../../configs/config';

const Footer = ({ mix }) => {
	const { state, monthPayment, totalPayment } = useContext(AppContext);

	return (
		<footer className={`${mix} footer`}>
			<Result
				mix='footer__result'
				config={{ title: CONTENT.FOOTER.SUM.TITLE, unit: CONTENT.FOOTER.SUM.UNIT, amount: totalPayment }}
			/>
			<Result
				mix='footer__result'
				config={{ title: CONTENT.FOOTER.MONTHLY.TITLE, unit: CONTENT.FOOTER.MONTHLY.UNIT, amount: monthPayment }}
			/>
			<Submit mix='footer__submit' disabled={state.disabled} config={{ content: CONTENT.FOOTER.SUBMIT.CONTENT }} />
		</footer>
	);
};

export default Footer;
