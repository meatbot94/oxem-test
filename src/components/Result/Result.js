import './styles/index.css';

const Result = ({ mix, config }) => (
	<div className={`${mix} result`}>
		<h2 className='result__title'>{config.title}</h2>
		<p className='result__amount'>{`${Math.round(config.amount)
			.toString()
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} ${config.unit}`}</p>
	</div>
);

export default Result;
