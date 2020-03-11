/* You're going to eliminate the possibility of duplicate code by making a module
whose sole responsibility is to interact with the API.*/

const remoteURL = "http://localhost:5002";

export default {
	get(resource, id) {
		return fetch(`${remoteURL}/${resource}/${id}`).then(result =>
			result.json()
		);
	},
	getAll(resource, userId) {
		return fetch(
			`http://localhost:5002/${resource}?userId=${userId}&_sort=timeStamp`
		).then(result => result.json());
	},

	delete(resource) {
		console.log(resource);
		return fetch(`http://localhost:5002/`, {
			method: "DELETE"
		}).then(result => result.json());
	},

	save(save) {
		console.log(save);
		return fetch("http://localhost:5002/wishLists", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(save)
		}).then(response => response.json());
	},

	post(resource, newResource) {
		return fetch(`${remoteURL}/${resource}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newResource)
		}).then(data => data.json());
	},

	patch(resource) {
		return fetch(`${remoteURL}/${resource}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify()
		}).then(data => data.json());
	},
	put(resource) {
		return fetch(`${remoteURL}/${resource}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify()
		}).then(data => data.json());
	}
};
