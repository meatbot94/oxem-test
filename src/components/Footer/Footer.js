import './styles/index.css';

import Result from '../Result/Result';
import Submit from '../Submit/Submit';

import { CONTENT } from '../../configs/config';

const Footer = ({ mix }) => {
	return (
		<footer className={`${mix} footer`}>
			<Result
				mix='footer__result'
				config={{ content: { title: CONTENT.FOOTER.SUM.TITLE, unit: CONTENT.FOOTER.SUM.UNIT } }}
			/>
			<Result
				mix='footer__result'
				config={{ content: { title: CONTENT.FOOTER.MONTHLY.TITLE, unit: CONTENT.FOOTER.MONTHLY.UNIT } }}
			/>
			<Submit mix='footer__submit' content={CONTENT.FOOTER.SUBMIT.CONTENT} />
		</footer>
	);
};

export default Footer;
