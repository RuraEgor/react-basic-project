import React, { FunctionComponent } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";

type TNameFeature = {
	title: string
}

const FormFeature: React.FC<any> = ({show, addFeatureFun, showFormFeature}) => {
	const [data, setData] = React.useState<string>('')
	
	const getValue = (e: React.FormEvent<HTMLInputElement>) => {
		if (!e.currentTarget.value) return;
		setData(e.currentTarget.value)
	}
	
	const funAddFeature = (e: React.FormEvent) => {
		e.preventDefault()
		let elFeature: any = {
			id: Number((Math.random() * 1000).toFixed()),
			status: 'create',
			tasks: []
		}
		elFeature.name = data;
		addFeatureFun(elFeature);
		showFormFeatureFun();
	}
	
	const showFormFeatureFun = () => {
		setData('');
		showFormFeature();
	}
	
	return (
		<div className={`form-wrap ${(show) ? 'form-wrap_show' : ''}`}>
			<div onClick={showFormFeatureFun} className="form-background"></div>
			<form onSubmit={funAddFeature} className="form-login form-login__feature">
				<div className="inp-wrap">
					<p className="inp-label">Title:</p>
					<input
						id="feature_title"
						className="inp-login"
						type="text"
						placeholder="Title feature"
						value = {data}
						onChange={getValue}
					/>
				</div>
				<button className="btn btn-login">Send</button>
			</form>
		</div>
	)
}

export default FormFeature;
