import './styles/index.css';

const Option = ({ mix, title }) => {
	return (
		<div className={`${mix} option`} style={{ background: 'red' }}>
			<h2 className='option__title'>{title}</h2>
		</div>
	);
};

export default Option;
