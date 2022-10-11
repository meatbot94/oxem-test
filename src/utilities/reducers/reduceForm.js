/* eslint-disable default-case */
const reduceForm = (state, action) => {
	switch (action.type) {
		case 'HANDLE_INPUT':
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};
	}
};

export default reduceForm;
