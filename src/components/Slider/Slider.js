import { useState } from 'react';

import './styles/index.css';

const Slider = ({ mix, disabled, config }) => {
	// TODO temporary values
	const amount = '3 300 000';

	const [value, setValue] = useState(config.input.defaultValue);

	return (
		<div className={`${mix} slider`}>
			{/* title */}
			<h2 className='slider__title'>{config.content.title}</h2>
			{/* body */}
			<div className='slider__body'>
				<p className='slider__amount'>{amount}</p>
				{config.percent ? (
					<div className='slider__percent'>{`${value}${config.content.unit}`}</div>
				) : (
					<p className='slider__unit'>{config.content.unit}</p>
				)}
				{/* input */}
				<input
					id={config.input.id}
					className='slider__input'
					name={config.input.name}
					type='range'
					min={config.input.min}
					max={config.input.max}
					value={value}
					step={config.input.step}
					onChange={e => setValue(e.target.valueAsNumber)}
					style={{ backgroundSize: `${(value * 100) / config.input.max}% 100%` }}
				/>
			</div>
		</div>
	);
};

export default Slider;
