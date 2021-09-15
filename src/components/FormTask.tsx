import React, { FunctionComponent, useState, useEffect, useLayoutEffect} from 'react';

interface INameTask {
	show: boolean;
	managFormTask(): void;
	addTaskFn(task: ITask, featureId: number): void;
	featureId: number;
}

const FormTask: FunctionComponent<INameTask> = ({
										         show,
	                                             managFormTask,
	                                             addTaskFn,
	                                             featureId,
	}) => {
	
	const [inpValue, setInpValue] = useState('');
	
	useEffect( () =>{ if(!show) setInpValue(''); });
	
	
	function createTask(e: React.FormEvent) {
		e.preventDefault();
		addTaskFn(
			{
				id: Number(Date.now().toString()),
				name: inpValue,
				status: 'new'
			},
			featureId
		);
		managFormTask();
		setInpValue('');
	}
	
	function takeNameTask(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		setInpValue(e.currentTarget.value);
	}
	
	return (
		<div className={`form-wrap ${(show) ? 'form-wrap_show' : ''}`}>
			<div className="form-background" onClick={managFormTask}></div>
			<form onSubmit={createTask} className="form-login form-login__feature">
				<div className="inp-wrap">
					<p className="inp-label">Task name:</p>
					<input
						id="feature_title"
						className="inp-login"
						type="text"
						placeholder="Title feature"
						value={inpValue}
						onChange={takeNameTask}
					/>
				</div>
				<button className="btn btn-login">Send</button>
			</form>
		</div>
	)
}

export default FormTask;