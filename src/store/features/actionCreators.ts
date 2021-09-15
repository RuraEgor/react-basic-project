export const ADD_FEATURE = "ADD_FEATURE"
export const RENAME_FEATURE = "RENAME_FEATURE"
export const DEL_FEATURE = "DEL_FEATURE"
export const STATUS_FEATURE = "STATUS_FEATURE"
export const STATUS_TASK = "STATUS_TASK"
export const COMPLETE_FEATURE = "COMPLETE_FEATURE"
export const ADD_TASK = "ADD_TASK"
export const CHANGE_TASK = "CHANGE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"
export const DEL_TASK = "DEL_TASK"

export function addFeature(feature: IFeature) {
	const action: FeatureAction = {
		type: ADD_FEATURE,
		feature
	}
	
	return simulateHttpRequest(action)
	// return action;
}

export function renameFeature(featureId: number, featureName: string) {
	const action: RenameFeatureAction = {
		type: RENAME_FEATURE,
		featureId,
		featureName
	}
	
	return action;
}

export function changTask(task: ITask, id: number) {
	const action: TaskAction = {
		type: CHANGE_TASK,
		task,
		taskId: id
	}
	
	return action
	// return simulateHttpRequest(action)
}

export function addTask(task: ITask, featureId: number) {
	const action: AddTaskAction = {
		type: ADD_TASK,
		task,
		featureId: featureId
	}
	
	return action
}

export function delTask(id: number) {
	const action: RmTaskAction = {
		type: DEL_TASK,
		id,
	}
	
	return action
}

export function delFeature(id: number) {
	const action: RmFeatureAction = {
		type: DEL_FEATURE,
		id,
	}
	
	return action
}

export function statusFeature(featureId: number, status: string) {
	const action: StatusFeatureAction = {
		type: STATUS_FEATURE,
		featureId,
		status
	}
	
	return action
}

export function statusTask(featureId: number, taskId: number, status: string) {
	const action: StatusTaskAction = {
		type: STATUS_TASK,
		featureId,
		taskId,
		status
	}
	
	return action
}

export function simulateHttpRequest(data: any) {
	return (dispatch: DispatchType) => {
		dispatch(data)
	}
}