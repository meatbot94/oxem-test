/* eslint-disable default-case */
const reduceForm = (state, action) => {
	switch (action.type) {
		case 'HANDLE_INPUT':
			return { ...state, [action.payload.name]: action.payload.value };
		case 'HANDLE_LOCK':
			return { ...state, disabled: action.payload.disabled };
		case 'HANDLE_UNLOCK':
			return { ...state, disabled: action.payload.disabled };
	}
};

export default reduceForm;
