class Api {
	constructor(url) {
		this._url = url;
	}

	_handleResponse(response) {
		return response.ok ? response.json() : Promise.reject(response);
	}

	handleSubmit() {
		return fetch(`${this._url}/eK160jgYJ6UlaRPldJ1P`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
		}).then(response => this._handleResponse(response));
	}
}

const { API } = require('../../configs/config.json');

const api = new Api(API.BASE_URL);

export default api;
