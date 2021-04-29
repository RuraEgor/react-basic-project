import React, {FunctionComponent, Component} from 'react';
import { connect } from 'react-redux';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addFeature } from "../../store/actionCreators";
import Header from './Header';
import Task from './Task';
import FormFeature from './FormFeature';
import { Dispatch } from "redux";
import { Redirect } from "react-router";
import { getFeatSel } from "../../store/selectors";
import Box from './Box';



const Manager: FunctionComponent = () => {
	const [showForm, setStateForm] = React.useState<boolean>(false)
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
	
	const logout = () => {
		localStorage.removeItem('user');
		setRedir(true);
	}
	
	return (
		<div className="container">
			<Header
				showFormFeature={showFormFeature}
				logout={logout}
			/>
			<FormFeature
				show={showForm}
				showFormFeature={showFormFeature}
				addFeatureFun={addFeatureFun}
			/>
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
									<Task key={task.id} task={task} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<hr/>
			<Box lll="rrrrrrrr" />
		</div>
	)
}

export default Manager;
