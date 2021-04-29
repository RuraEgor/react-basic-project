import React, {FunctionComponent} from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { changTask } from "../../store/actionCreators";
import { Dispatch } from 'redux';

type Props = {
	task: ITask
}

const Task: FunctionComponent<Props> = ({task}) => {
	
	const [newText, setNewText] = React.useState<boolean>(false)
	const [inpText, setInpText] = React.useState<string>(task.name)
	
	const dispatch: Dispatch<any> = useDispatch()
	const rewriteTask = (task: ITask) => {
		dispatch(changTask(task))
	}
	
	const newTask: ITask = Object.assign({}, task);
	
	const rewright = () => {
		if (newText) {
			if (!inpText) return false;
			newTask.name = inpText;
			rewriteTask(newTask);
		} else {
			console.log("jjjjjjjj",  );
		}
		
		setNewText(!newText)
	}
	
	const getValue = (e: React.FormEvent<HTMLInputElement>) => {
		setInpText(e.currentTarget.value);
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
			<button onClick={rewright} className="btn btn-change">Change Task</button>
		</div>
	)
}

export default Task;