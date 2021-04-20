import React, { FunctionComponent } from 'react';

const Manager: FunctionComponent = () => {
	return (
		<div className="list-wrap">
			<h1 className="feature-title">List feature</h1>
			<div className="list-feature">
				<div className="feature-item__wrap">
					<div className="feature-item">
						<p className="feature-item__label">Some text</p>
					</div>
					<div className="list-task">
						<div className="task-item">
							<p className="task-item__name">Task 1</p>
						</div>
						<div className="task-item">
							<p className="task-item__name">Task 2</p>
						</div>
						<div className="task-item">
							<p className="task-item__name">Task 3</p>
						</div>
					</div>
				</div>
				<div className="feature-item__wrap">
					<div className="feature-item">
						<p className="feature-item__label">Some text</p>
					</div>
					<div className="list-task">
						<div className="task-item">
							<p className="task-item__name">Task 1</p>
						</div>
						<div className="task-item">
							<p className="task-item__name">Task 2</p>
						</div>
						<div className="task-item">
							<p className="task-item__name">Task 3</p>
						</div>
					</div>
				</div>
				<div className="feature-item__wrap">
					<div className="feature-item">
						<p className="feature-item__label">Some text</p>
					</div>
					<div className="list-task">
						<div className="task-item">
							<p className="task-item__name">Task 1</p>
						</div>
						<div className="task-item">
							<p className="task-item__name">Task 2</p>
						</div>
						<div className="task-item">
							<p className="task-item__name">Task 3</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Manager;
