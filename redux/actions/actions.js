import fetch from 'isomorphic-unfetch';

// local 
// http://localhost:3000
// SMARTBRO
// http://192.168.1.102:3000
// .hidden
// http://192.168.43.179:3000

const host = 'http://localhost:3000';

export function hello () {
	return {
		type: "HELLO",
		payload: "Hello"
	}
}

export function submitSearch (query, filter, provider) {
	return {
		type: "SEARCH",
		payload: fetch(`${host}/api/search?query=${query}&filter=${filter}&provider=${provider}`).then(res => res.json()),
	}
}

export function viewDocument (id) {
	return {
		type: "VIEW_DOCUMENT",
		payload: fetch(`${host}/api/view/${id}`).then(res => res.json()),
	}
}