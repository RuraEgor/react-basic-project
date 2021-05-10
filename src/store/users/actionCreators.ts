export const CHECK_USER = "CHECK_USER"

export function checkUser(loginUser: ILogin) {
	const action: UserLoginAction = {
		type: CHECK_USER,
		loginUser,
	}
	
	return action;
}


// export function changTask(task: ITask) {
// 	const action: TaskAction = {
// 		type: actionTypes.CHANGE_TASK,
// 		task: task,
// 		// featureId: id
// 	}
//
// 	return simulateHttpRequest(action)
// }
//
// export function simulateHttpRequest(data: any) {
// 	return (dispatch: DispatchType) => {
// 		dispatch(data)
// 	}
// }