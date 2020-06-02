import {combineReducers, createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import store from '../store';

import {createWrapper} from 'next-redux-wrapper';


const searchReducer = (state = store.search, action) => {
	switch (action.type) {
		case "SEARCH_PENDING":
			return {
				...state,
				err: false,
				searching: true,
			}
		case "SEARCH_REJECTED":
			return {
				...state,
				searching: false,
				searched: true,
				err: true,
			}
		case "SEARCH_FULFILLED":
			return {
				...state,
				searching: false,
				searched: true,
				err: false,
				filter: action.payload.filter,
				provider: action.payload.provider,
				results: action.payload.results,
				query: action.payload.query,
			}
		default: return state;
	}
}

const currentDocumentReducer = (state = store.currentDocument, action) => {
	switch (action.type) {
		case "VIEW_DOCUMENT_PENDING": 
			return {
				...state,
				fetching: true,
			}
		case "VIEW_DOCUMENT_FULFILLED":
			return {
				...state,
				...action.payload,
				fetching: false,
				fetched: true,
			}
		default: return state;
	}
}

const reducers = combineReducers({
	search: searchReducer,
	currentDocument: currentDocumentReducer
});


const makeStore = (context, state=store) => {
	return createStore(reducers, state, applyMiddleware(promise));
}

const wrapper =  createWrapper(makeStore);

export default wrapper;