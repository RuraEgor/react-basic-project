import {
	ADD_FEATURE,
	CHANGE_TASK,
	ADD_TASK
} from "./actionCreators"

const initialState: IFeature[] = [
	{
		id: 1000,
		name: 'First',
		status: 'complete',
		tasks: [
			{
				id: 1010,
				name: 'Task 1',
			},
			{
				id: 1020,
				name: 'Task 2',
			}
		]
	},
	{
		id: 2000,
		name: 'Second',
		status: 'complete',
		tasks: [
			{
				id: 2010,
				name: 'Task 1',
			},
			{
				id: 2020,
				name: 'Task 2',
			}
		]
	},
]


const reducer = (
	state: IFeature[] = initialState,
	action: FeatureAction & TaskAction
): IFeature[] => {
	
	let updatedFeature: IFeature[];
	
	switch (action.type) {
		case ADD_FEATURE:
			return {
				...state,
				// features: state.features.concat(action.feature)
				// features: state
			}
		case CHANGE_TASK:
			updatedFeature = state.map( el => {
				if (!el.tasks.length) return el;
				const tasks = el.tasks.map( item => {
					if (item.id == action.task.id) return action.task;
					return item;
				})
				el.tasks = tasks;
				return el;
			})
			
			return [...updatedFeature]
		case ADD_TASK:
			console.log("state", state );
			updatedFeature = state.map( el => {
				if (!el.tasks.length) return el;
				const tasks = el.tasks.map( item => {
					if (item.id == action.task.id) return action.task;
					return item;
				})
				el.tasks = tasks;
				return el;
			})
			
			return [...updatedFeature]
	}
	
	return state
}

export default reducer