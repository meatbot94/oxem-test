import './styles/index.css';

import Title from '../Title/Title';

const Header = ({ mix }) => (
	<header className={`${mix} header`}>
		<Title mix='header__title' />
	</header>
);

export default Header;
