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
	]
}

const reducer = (
	state: dataState = initialState,
	action: FeatureAction & TaskAction
): dataState => {
	switch (action.type) {
		case actionTypes.ADD_FEATURE:
			return {
				...state,
				features: state.features.concat(action.feature)
			}
		case actionTypes.CHANGE_TASK:
			const updatedFeature: IFeature[] = state.features.map( el => {
					if (!el.tasks.length) return el;
					const tasks = el.tasks.map( item => {
						if (item.id == action.task.id) return action.task;
						return item;
					})
					el.tasks = tasks;
					return el;
				})
			
			return {
				...state,
				features: [...updatedFeature]
			}
	}
	
	return state
}

export default reducer