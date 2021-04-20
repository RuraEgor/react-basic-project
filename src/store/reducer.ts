import * as actionTypes from "./actionTypes"

const initialState: dataState = {
	users: [
		{
			id: 10,
			name: 'Alex',
			password: 'Alex',
			position: 'manager'
		},
		{
			id: 20,
			name: 'Tom',
			password: 'Tom',
			position: 'developer'
		},
		{
			id: 30,
			name: 'Jacob',
			password: 'Jacob',
			position: 'tester'
		},
	],
}

const reducer = (
	state: any, action: any
): dataState => {
	return state
}

export default reducer