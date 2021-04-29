import * as actionTypes from "./actionTypes"

export function addFeature(feature: any) {
	const action: FeatureAction = {
		type: actionTypes.ADD_FEATURE,
		feature,
	}
	
	return simulateHttpRequest(action)
}

export function addFeatureNew(feature: any) {
	const action: FeatureAction = {
		type: actionTypes.ADD_FEATURE,
		feature,
	}
	
	return action;
}

export function changTask(task: ITask) {
	const action: TaskAction = {
		type: actionTypes.CHANGE_TASK,
		task: task,
		// featureId: id
	}
	
	return simulateHttpRequest(action)
}

export function simulateHttpRequest(data: any) {
	return (dispatch: DispatchType) => {
		dispatch(data)
	}
}