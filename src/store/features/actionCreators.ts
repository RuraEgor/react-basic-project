export const ADD_FEATURE = "ADD_FEATURE"
export const COMPLETE_FEATURE = "COMPLETE_FEATURE"
export const ADD_TASK = "ADD_TASK"
export const CHANGE_TASK = "CHANGE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"

export function addFeature(feature: any) {
	const action: FeatureAction = {
		type: ADD_FEATURE,
		feature,
	}
	
	return simulateHttpRequest(action)
}

export function addFeatureNew(feature: any) {
	const action: FeatureAction = {
		type: ADD_FEATURE,
		feature,
	}
	
	return action;
}

export function changTask(task: ITask, id: number) {
	const action: TaskAction = {
		type: CHANGE_TASK,
		task: task,
		featureId: id
	}
	
	return action
	// return simulateHttpRequest(action)
}

export function addTask(task: ITask, id: number) {
	const action: TaskAction = {
		type: CHANGE_TASK,
		task,
		featureId: id
	}
	
	return action
}



export function simulateHttpRequest(data: any) {
	return (dispatch: DispatchType) => {
		dispatch(data)
	}
}