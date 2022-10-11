import './styles/index.css';

import Title from '../Title/Title';

import { CONTENT } from '../../configs/config';

const Header = ({ mix }) => (
	<header className={`${mix} header`}>
		<Title mix='header__title' config={{ content: CONTENT.HEADER.TITLE }} />
	</header>
);

export default Header;
