const store = {
	search: {
		query: "",
		filter: "",
		provider: "",
		results: [],
		searching: false,
		searched: false,
	},
	currentDocument: {
		title: "",
		authors: "",
		pubDate: "",
		publication: "",
		publisher: "",
		content: "",
		copyright: "",
		fetching: false,
		fetched: false,
	}
}

export default store;