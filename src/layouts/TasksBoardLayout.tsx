import React, { Component, FunctionComponent } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { getUsersSel } from '../store/users/selectors'
import { getFeatSel } from '../store/features/selectors'
import { changTask, addTask } from '../store/features/actionCreators'
import { TasksBoard } from '../components/TasksBoard'

import {number} from "prop-types";

interface ITasksBoardLayout {
	features: IFeature[];
	users: IUser[];
	changTaskFun(task: ITask): void;
	addTaskFun(task: ITask, id: number): void;
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
			addTaskFun
		} = this.props;
		
		const userId: number = Number(localStorage.getItem('user'));
		const dataUser: IUser[] = users.filter( el => userId == el.id);
		
		return (
			<TasksBoard
				dataUser={dataUser[0]}
				features={features}
				changTaskFun={changTaskFun}
				addTaskFun={addTaskFun}
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
		changTaskFun(task: ITask, id: number): void {
			dispatch(changTask(task, id))
		},
		addTaskFun(task: ITask, id: number): void {
			dispatch(addTask(task, id))
		}
	}
}

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(TasksBoardLayout)
