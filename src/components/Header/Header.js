import './styles/index.css';

import Title from '../Title/Title';

const { CONTENT } = require('../../configs/config.json');

const Header = ({ mix }) => (
	<header className={`${mix} header`}>
		<Title mix='header__title' content={CONTENT.HEADER.TITLE} />
	</header>
);

export default Header;
