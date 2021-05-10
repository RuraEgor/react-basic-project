// import React, { Component } from 'react'
// const TasksBoard = (prop: any) => {
// 	console.log("prop33333333", prop );
// 	return <h2>ddddddddd</h2>
// }
// export {TasksBoard};


import React, {Component} from 'react';
import { connect } from 'react-redux';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Header from './Header';
import Task from './Task';
// import FormFeature from './FormFeature';
import { Dispatch } from "redux";
import { Redirect } from "react-router";


interface ITasksBoard {
	features: IFeature[];
	dataUser: IUser;
	changTaskFun(task: ITask): void;
	addTaskFun(task: ITask, id: number): void;
}

export class TasksBoard extends Component<any> {
	
	constructor(props: any){
		super(props)
	}
	
	state = {
		logPage: false
		// some: ''
	}
	
	/*const [showForm, setStateForm] = React.useState<boolean>(false)
	const [redir, setRedir] = React.useState<boolean>()


	const features: IFeature[] = useSelector(
		(state: dataState) => state.features
	)

	// const features: IFeature[] = getFeatSel(store);

	// React.useEffect( () => { debugger }, [features] );

	const dispatch: Dispatch<any> = useDispatch()
	const addFeatureFun = (data: IFeature) => {
		console.log("datadatadatadata", data );
		dispatch(addFeature(data));
	}

	const showFormFeature = () => {
		setStateForm(!showForm)
	}


	if (redir) return  <Redirect to='/' />
	*/

	logout = () => {
		localStorage.removeItem('user');
		this.setState({logPage: true})
	}
	

	render() {
		const {features, changTaskFun, dataUser} = this.props;
		console.log("fffffffffffffdddddd", dataUser );
		
		if (this.state.logPage)	return <Redirect to={'/'}/>
		
		return (
			<div className="container">
				<Header
					logout={this.logout}
				/>
				{/*<Header
					showFormFeature={showFormFeature}
					logout={logout}
				/>*/}
				{/*<FormFeature*/}
					{/*show={showForm}*/}
					{/*showFormFeature={showFormFeature}*/}
					{/*addFeatureFun={addFeatureFun}*/}
				{/*/>*/}
				<div className="list-wrap">
					<h1 className="feature-title">List features</h1>
					<div className="list-feature">
						{features.map((feature: IFeature) => (
							<div key={feature.id} className="feature-item__wrap">
								<div className="feature-item">
									<p className="feature-item__label">{feature.name}</p>
								</div>
								<div className="list-task">
									{feature.tasks.map((task: ITask) => (
										<Task
											key={task.id}
											task={task}
											featureId={feature.id}
											changTaskFun={changTaskFun}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
	
}

