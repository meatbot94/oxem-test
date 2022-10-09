import './styles/index.css';

import Slider from '../Slider/Slider';

const Option = ({ mix, percent, title, unit, inputId, inputName }) => {
	return (
		<div className={`${mix} option`}>
			<h2 className='option__title'>{title}</h2>
			<Slider mix='option__slider' percent={percent} unit={unit} inputId={inputId} inputName={inputName} />
		</div>
	);
};

export default Option;
