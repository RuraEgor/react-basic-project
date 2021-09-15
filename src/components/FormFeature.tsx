import React, { FunctionComponent, useState, useEffect, useLayoutEffect} from 'react';

interface INameFeature {
	show: boolean;
	managFormFeature(): void;
	changTaskFn(id: number, name: string): void;
}

const FormFeature: FunctionComponent<INameFeature> = ({
										         show,
										         managFormFeature,
	                                             changTaskFn
	}) => {
	
	const [inpValue, setInpValue] = useState('');
	
	useEffect( () =>{ if(!show) setInpValue(''); });
	
	
	function createFeature(e: React.FormEvent) {
		e.preventDefault();
		changTaskFn(Number(Date.now().toString()), inpValue);
		managFormFeature();
		setInpValue('');
	}
	
	function takeNameFeature(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		setInpValue(e.currentTarget.value);
	}
	
	return (
		<div className={`form-wrap ${(show) ? 'form-wrap_show' : ''}`}>
			<div className="form-background" onClick={managFormFeature}></div>
			<form onSubmit={createFeature} className="form-login form-login__feature">
				<div className="inp-wrap">
					<p className="inp-label">Feature name:</p>
					<input
						id="feature_title"
						className="inp-login"
						type="text"
						placeholder="Title feature"
						value={inpValue}
						onChange={takeNameFeature}
					/>
				</div>
				<button className="btn btn-login">Send</button>
			</form>
		</div>
	)
}

export default FormFeature;