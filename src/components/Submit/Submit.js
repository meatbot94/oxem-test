import './styles/index.css';

import Spinner from '../Spinner/Spinner';

const Submit = ({ mix, disabled, config }) => (
	<div className={`${mix} submit`}>
		<button
			className={`submit__button submit__button_spinner${disabled ? ' submit__button_disabled' : ''}`}
			id='submit'
			name='submit'
			aria-label='Оставить заявку'
			formMethod='post'
			type='submit'
			form='form'
			disabled={disabled}>
			{disabled ? <Spinner /> : config.content}
		</button>
	</div>
);

export default Submit;
