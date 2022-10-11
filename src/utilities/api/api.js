import { API } from '../../configs/config';

class Api {
	constructor(url) {
		this._url = url;
	}

	_handleResponse(response) {
		return response.ok ? response.json() : Promise.reject(response);
	}

	handleSubmit(data) {
		return fetch(`${this._url}/eK160jgYJ6UlaRPldJ1P`, {
			mode: 'no-cors',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		}).then(response => this._handleResponse(response));
	}
}

const api = new Api(API.BASE_URL);

export default api;
