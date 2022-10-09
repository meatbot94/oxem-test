import './styles/index.css';

import Option from '../Option/Option';

const Main = ({ mix }) => {
	return (
		<main className={`${mix} main`}>
			<Option mix='main__option' />
			<Option mix='main__option' />
			<Option mix='main__option' />
		</main>
	);
};

export default Main;
