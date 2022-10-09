import './styles/index.css';

const Slider = ({ mix, percent, unit, inputId, inputName }) => (
	<div className={`${mix} slider`}>
		<p className='slider__amount'>3 300 000</p>
		{percent ? <div className='slider__percent'>{`${'15'}${unit}`}</div> : <p className='slider__unit'>{unit}</p>}
		{/* TODO correct input attributes */}
		<input
			id={inputId}
			className='slider__input'
			name={inputName}
			type='range'
			min='0'
			max='100'
			// value='25'
			step='1'
		/>
	</div>
);

export default Slider;
