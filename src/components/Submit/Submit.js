import Spinner from '../Spinner/Spinner';
import './styles/index.css';

const Submit = ({ mix, content }) => {
	return (
		<div className={`${mix} submit`}>
			<button className='submit__button submit__button_spinner'>
				{/*{content}*/}
				<Spinner />
			</button>
		</div>
	);
};

export default Submit;
