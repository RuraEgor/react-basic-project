import * as ActionType from "./actionCreators"

const initialState: IUser[] = [
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
]


const reducer = (
	state: IUser[] = initialState,
	action: UserLoginAction
): IUser[] => {
	switch (action.type) {
		case ActionType.CHECK_USER:
			return {
				...state,
			}
	}
	
	return state
}

export default reducer