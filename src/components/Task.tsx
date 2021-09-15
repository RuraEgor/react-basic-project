import React, {FunctionComponent} from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from 'redux';

interface IProps {
	user: IUser;
	task: ITask;
	featureId: number;
	changTaskFun(task: ITask, id: number): void;
	delTaskFn(id: number): void;
	statusTaskFn(featureId: number, taskId: number, status: string): void;
}

const Task: FunctionComponent<IProps> = ({
	                                         task,
	                                         featureId,
	                                         changTaskFun,
	                                         delTaskFn,
	                                         statusTaskFn,
	                                         user
										}) => {
	
	const [newText, setNewText] = React.useState<boolean>(false)
	const [inpText, setInpText] = React.useState<string>(task.name)

	// const dispatch: Dispatch<any> = useDispatch()
	const rewriteTask = (task: ITask) => {
		changTaskFun(task, featureId)
	}
	
	const newTask: ITask = Object.assign({}, task);
	
	const rewright = () => {
		if (newText) {
			if (!inpText) return false;
			newTask.name = inpText;
			rewriteTask(newTask);
		}

		setNewText(!newText)
	}
	
	const getValue = (e: React.FormEvent<HTMLInputElement>) => {
		setInpText(e.currentTarget.value);
	}
	
	const delTask = () => {
		delTaskFn(task.id);
	}
	
	const statusTaskChFn = (e: React.FormEvent<HTMLSelectElement>) => {
		const status = e.currentTarget.value;
		statusTaskFn(featureId, task.id, status);
	}
	
	return (
		<div key={task.id} className="task-item">
			<div className="task-item__wrap">
				{!newText && <p className="task-item__name">{inpText}</p>}
				{newText &&
					<input
						type="text"
						onChange={getValue}
						value={inpText}
						className="inp-login task__input"
					    placeholder="Text task"
					/>}
			</div>
			<select className="gl-select"
			        onChange={statusTaskChFn} defaultValue={task.status}>
				<option value='new'>New</option>
				<option value='progress'>Progress</option>
				<option value='testing'>Testing</option>
				<option value='complete'>Complete</option>
			</select>
			{(user.position === 'manager' || user.position === 'tester') &&
				<button onClick={rewright} className="btn btn-change btn-change_feature">Change Task</button>
			}
			{user.position === 'manager' &&
				<button onClick={delTask} title="Remove Feature"
			        className="btn btn-change btn-change_del"></button>
			}
		</div>
	)
}

export default Task;