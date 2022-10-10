import './styles/index.css';

const Submit = ({ mix, content }) => {
	return (
		<div className={`${mix} submit`}>
			<button className='submit__button'>{content}</button>
		</div>
	);
};

export default Submit;
