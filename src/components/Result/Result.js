import './styles/index.css';

const Result = ({ mix, config }) => {
	// TODO temporary variable
	const amount = '3 000 000';

	return (
		<div className={`${mix} result`}>
			<h2 className='result__title'>{config.content.title}</h2>
			<p className='result__amount'>{`${amount} ${config.content.unit}`}</p>
		</div>
	);
};

export default Result;
