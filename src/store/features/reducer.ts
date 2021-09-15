import {
	ADD_FEATURE,
	DEL_FEATURE,
	STATUS_FEATURE,
	STATUS_TASK,
	CHANGE_TASK,
	ADD_TASK,
	DEL_TASK,
	RENAME_FEATURE,
} from "./actionCreators"

const initialState: IFeature[] = [
	{
		id: 1000,
		name: 'First',
		status: 'testing',
		tasks: [
			{
				id: 1010,
				name: 'Task 1',
				status: 'complete',
			},
			{
				id: 1020,
				name: 'Task 2',
				status: 'testing',
			}
		]
	},
	{
		id: 2000,
		name: 'Second',
		status: 'progress',
		tasks: [
			{
				id: 2010,
				name: 'Task 1',
				status: 'progress',
			},
			{
				id: 2020,
				name: 'Task 2',
				status: 'progress',
			}
		]
	},
]


const reducer = (
	state: IFeature[] | null = initialState,
	action: FeatureAction &
		TaskAction &
		RmFeatureAction &
		RmTaskAction &
		AddTaskAction &
		RenameFeatureAction &
		StatusFeatureAction &
		StatusTaskAction
): IFeature[] => {
	
	let updatedFeature: any;

	switch (action.type) {
		case RENAME_FEATURE:
			if (!state) return updatedFeature;
			updatedFeature = state.filter( el => {
				if (el.id === action.featureId) el.name = action.featureName;
				return el;
			})
			
			return [...updatedFeature]
		case ADD_FEATURE:
			if (!state) return updatedFeature;
			return [
				...state,
				action.feature
			]
		case DEL_FEATURE:
			if (!state) return updatedFeature;
			updatedFeature = state.filter( el => {
				if (el.id !== action.id) return el;
			})
			
			return [...updatedFeature]
		case STATUS_FEATURE:
			if (!state) return updatedFeature;
			updatedFeature = state.map( el => {
				if (el.id === action.featureId) el.status = action.status;
				return el;
			})

			return [...updatedFeature]
		case DEL_TASK:
			if (!state) return updatedFeature;
			updatedFeature = state.map( el => {
				if (!el.tasks.length) return el;
				const tasks = el.tasks.filter( item => {
					if (item.id !== action.id) return item;
				})
				el.tasks = tasks;
				
				return el;
			})
			
			return [...updatedFeature]
		case CHANGE_TASK:
			if (!state) return updatedFeature;
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
		case STATUS_TASK:
			if (!state) return updatedFeature;
			updatedFeature = state.map( el => {
				if (el.id === action.featureId) {
					el.tasks.forEach( item => {
						if (item.id === action.taskId) item.status = action.status
					})
				}
				return el;
			})
			
			return [...updatedFeature]
		case ADD_TASK:
			if (!state) return updatedFeature;
			updatedFeature = state.map( el => {
				if (el.id === action.featureId) {
					el.tasks.push(action.task);
				}
				
				return el;
			})
			
			return [...updatedFeature]
	}
	
	if (!state) return updatedFeature;
	return state
}

export default reducer