import './styles/index.css';

const Slider = ({ mix, dispatch, disabled, config }) => (
	<div className={`${mix} slider`}>
		<h2 className='slider__title'>{config.content.title}</h2>
		<div className={`slider__body${disabled ? ' slider__body_disabled' : ''}`}>
			<p className={`slider__amount${disabled ? ' slider__amount_disabled' : ''}`}>
				{config.content.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}
			</p>
			{config.percent ? (
				<div
					className={`slider__percent${
						disabled ? ' slider__percent_disabled' : ''
					}`}>{`${config.input.value}${config.content.unit}`}</div>
			) : (
				<p className={`slider__unit${disabled ? ' slider__unit_disabled' : ''}`}>{config.content.unit}</p>
			)}
			<input
				id={config.input.id}
				className={`slider__input${disabled ? ' slider__input_disabled' : ''}`}
				name={config.input.name}
				type='range'
				form={config.input.form}
				min={config.input.min}
				max={config.input.max}
				value={config.input.value}
				step={config.input.step}
				disabled={disabled}
				onChange={e => {
					dispatch({
						type: 'HANDLE_INPUT',
						payload: {
							name: e.target.name,
							value: e.target.value,
						},
					});
				}}
				style={{
					backgroundSize: `${((config.input.value - config.input.min) * 100) / (config.input.max - config.input.min)}% 100%`,
				}}
				required
			/>
		</div>
	</div>
);

export default Slider;
