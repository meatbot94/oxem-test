import './styles/index.css';

import Spinner from '../Spinner/Spinner';

const Submit = ({ mix, config }) => (
	<div className={`${mix} submit`}>
		{/* TODO correct button attributes submit */}
		<button
			className='submit__button submit__button_spinner'
			id='submit'
			name='submit'
			aria-label='Оставить заявку'
			formMethod='post'
			type='submit'
			form='form'>
			{config.content}
			{/* <Spinner /> */}
		</button>
	</div>
);

export default Submit;
