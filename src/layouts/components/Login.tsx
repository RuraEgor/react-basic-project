import React, { FunctionComponent } from 'react';

const Login: FunctionComponent = () => {
	return (
		<div className="form-login">
			<div className="inp-wrap">
				<p className="inp-label">Login:</p>
				<input className="inp-login" type="text" placeholder="Login" />
			</div>
			<div className="inp-wrap">
				<p className="inp-label">Password:</p>
				<input className="inp-login" type="password" placeholder="Password" />
			</div>
			<button onClick={sendData} className="btn btn-login">Send</button>
		</div>
	)
}

function sendData() {

}

export default Login;
