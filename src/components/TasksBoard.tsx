import React, {Component} from 'react';
import Header from './Header';
import Task from './Task';
import { Redirect } from "react-router";
import FormFeature from "./FormFeature";
import FormTask from "./FormTask";

interface ITasksBoard {
	features: IFeature[];
	user: IUser;
	changTaskFun(task: ITask): void;
	changTaskFn(id: number, name: string): void;
	delFeatureFn(id: number): void;
	delTaskFn(id: number): void;
	addTaskFn(task: ITask, featureId: number): void;
	renameFeatureFn(featureId: number, featureName: string): void;
	statusFeatureFn(featureId: number, status: string): void;
	statusTaskFn(featureId: number, taskId: number, status: string): void;
}

export class TasksBoard extends Component<ITasksBoard> {
	
	constructor(props: any){
		super(props)
	}
	
	state = {
		logPage: false,
		showForm: false,
		showFormTask: false,
		featureId: 0,
		featureIdSel: 0,
		featureChName: 0,
		featureNewName: '',
	}

	logout = () => {
		localStorage.removeItem('user');
		this.setState({logPage: true})
	}
	
	delFeature = (id: number) => {
		this.props.delFeatureFn(id);
	}
	
	managFormFeature = () => {
		this.setState({showForm: !this.state.showForm});
	}
	
	managFormTask = () => {
		this.setState({showFormTask: !this.state.showFormTask});
	}
	
	setFeatureId = (featureId: number) => {
		this.managFormTask();
		this.setState({featureId: featureId})
	}
	
	
	featureChNmFn = (featureChName: number) => {
		if (this.state.featureChName === featureChName) {
			this.props.renameFeatureFn(featureChName, this.state.featureNewName);
			this.setState({featureChName: 0});
			return false;
		}
		this.setState({featureChName: featureChName})
		this.props.features.forEach((el: IFeature) => {
			if (el.id === featureChName) {
				this.setState({featureNewName: el.name});
			}
		})
	}
	
	featureNewNameFn = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		this.setState({featureNewName: e.currentTarget.value});
	}
	
	statusFeatureChFn = (e: React.FormEvent<HTMLSelectElement>) => {
		e.preventDefault();
		const status = e.currentTarget.value;
		this.props.statusFeatureFn(this.state.featureIdSel, status);
	}
	
	getFeatureId = (featureId: number) => {
		this.setState({featureIdSel: featureId})
	}
	
	
	// RENDER
	render() {
		const {features, changTaskFun, delTaskFn} = this.props;
		
		if (this.props.user && this.state.logPage)	return <Redirect to={'/'} />
		return (
			<div className="container">
				<Header
					logout={this.logout}
					managFormFeature={this.managFormFeature}
				    user={this.props.user}
				/>
				<FormFeature
					show={this.state.showForm}
					managFormFeature={this.managFormFeature}
					changTaskFn={this.props.changTaskFn}
				/>
				<FormTask
					show={this.state.showFormTask}
					managFormTask={this.managFormTask}
					addTaskFn={this.props.addTaskFn}
					featureId={this.state.featureId}
				/>
				<div className="list-wrap">
					<h1 className="feature-title">List features</h1>
					<div className="list-feature">
						{features.map((feature: IFeature) => (
							<div key={feature.id} className="feature-item__wrap">
								<div className="feature-item">
									<div className="feature-item__cont-inp">
										{(this.state.featureChName !== feature.id) && <p className="feature-item__label">{feature.name}</p>}
										{(this.state.featureChName === feature.id) &&
										<input
											type="text"
											onChange={this.featureNewNameFn}
											value={this.state.featureNewName}
											className="inp-login task__input"
											placeholder="Text task"
										/>
										}
									</div>
									<div className="feature-item__cont">
										{this.props.user.position === 'manager' &&
											<select onClick={this.getFeatureId.bind(this, feature.id)}
											        onChange={this.statusFeatureChFn}
											        defaultValue={feature.status}
											        className="gl-select">
												<option value='new'>New</option>
												<option value='progress'>Progress</option>
												<option value='testing'>Testing</option>
												<option value='complete'>Complete</option>
											</select>
										}
										{this.props.user.position === 'manager' &&
											<button onClick={this.featureChNmFn.bind(this, feature.id)}
												className="btn btn-change btn-change_feature">Change Feature</button>
										}
										{(this.props.user.position === 'manager' || this.props.user.position === 'tester') &&
											<button onClick={this.setFeatureId.bind(this, feature.id)}
												className="btn btn-change btn-change_feature">Create Task</button>
										}
										{this.props.user.position === 'manager' &&
											<button onClick={this.delFeature.bind(this, feature.id)} title="Remove Feature"
										        className="btn btn-change btn-change_del"></button>
										}
									</div>
								</div>
								<div className="list-task">
									{feature.tasks &&
									feature.tasks.length > 0 &&
									feature.tasks.map((task: ITask) => (
										<Task
											user={this.props.user}
											key={task.id}
											task={task}
											featureId={feature.id}
											changTaskFun={changTaskFun}
											delTaskFn={delTaskFn}
											statusTaskFn={this.props.statusTaskFn}
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

