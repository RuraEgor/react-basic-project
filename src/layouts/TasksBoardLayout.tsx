import React, { Component, FunctionComponent } from 'react';
import { connect } from 'react-redux'
import { getUsersSel } from '../store/users/selectors'
import { getFeatSel } from '../store/features/selectors'
import { Redirect } from "react-router";
import {
	changTask,
	addTask,
	addFeature,
	delFeature,
	delTask,
	renameFeature,
	statusFeature,
	statusTask
} from '../store/features/actionCreators'
import { TasksBoard } from '../components/TasksBoard'

import {number} from "prop-types";

interface ITasksBoardLayout {
	features: IFeature[];
	users: IUser[];
	changTaskFun(task: ITask): void;
	changTaskFn(id: number, name: string): void;
	delFeatureFn(id: number): void;
	delTaskFn(id: number): void;
	addTaskFn(task: ITask, featureId: number): void;
	renameFeatureFn(featureId: number, featureName: string): void;
	statusFeatureFn(featureId: number, status: string): void;
	statusTaskFn(featureId: number, taskId: number, status: string): void;
}

class TasksBoardLayout extends Component<ITasksBoardLayout> {
	
	constructor(props: any){
		super(props)
	}
	
	render() {
		const {
			features,
			users,
			changTaskFun,
			changTaskFn,
			delFeatureFn,
			delTaskFn,
			addTaskFn,
			renameFeatureFn,
			statusFeatureFn,
			statusTaskFn,
		} = this.props;
		
		const userId: number = Number(localStorage.getItem('user'));
		const dataUser: IUser[] = users.filter( el => userId == el.id);
		
		if (dataUser.length === 0)	return <Redirect to={'/'} />
		
		return (
			<TasksBoard
				user={dataUser[0]}
				features={features}
				changTaskFun={changTaskFun}
				changTaskFn={changTaskFn}
				delFeatureFn={delFeatureFn}
				delTaskFn={delTaskFn}
				addTaskFn={addTaskFn}
				renameFeatureFn={renameFeatureFn}
				statusFeatureFn={statusFeatureFn}
				statusTaskFn={statusTaskFn}
			/>
		)
	}
}

const mapStatetoProps = (state: dataState) => {
	return {
		features: getFeatSel(state),
		users: getUsersSel(state)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		changTaskFn(id: number, name: string): void {
			dispatch(addFeature({id, name, status: 'new', tasks: []}))
		},
		changTaskFun(task: ITask, id: number): void {
			dispatch(changTask(task, id))
		},
		addTaskFn(task: ITask, featureId: number): void {
			dispatch(addTask(task, featureId))
		},
		delFeatureFn(id: number): void {
			dispatch(delFeature(id))
		},
		delTaskFn(id: number): void {
			dispatch(delTask(id))
		},
		renameFeatureFn(featureId: number, featureName: string): void {
			dispatch(renameFeature(featureId, featureName))
		},
		statusFeatureFn(featureId: number, status: string): void {
			dispatch(statusFeature(featureId, status))
		},
		statusTaskFn(featureId: number, taskId: number, status: string): void {
			dispatch(statusTask(featureId, taskId, status))
		},
	}
}

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(TasksBoardLayout)
