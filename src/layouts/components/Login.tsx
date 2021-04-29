import React, { FunctionComponent } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Redirect } from "react-router";

type CheckLog = {
	login: string,
	password: string
}

const Login: FunctionComponent = () => {
	const [loginfo, setLoginfo] = React.useState<CheckLog | any>()
	const [redir, setRedir] = React.useState<string>()
	
	const users: IUser[] = useSelector(
		(state: dataState) => state.users,
		shallowEqual
	)
	
	// React.useEffect(() => {
	// 	return  <Redirect to={redir} />
	// }, [redir] );
	if (redir) return  <Redirect to={redir} />
	
	const isLogin = localStorage.getItem('user');
	if (isLogin) return <Redirect to={'/' + isLogin}/>;
	
	const getValue = (e: React.FormEvent<HTMLInputElement>) => {
		if (!e.currentTarget.value) return;
		setLoginfo({
			...loginfo,
			[e.currentTarget.id]: e.currentTarget.value,
		})
	}
	
	
	
	const checkUser = (e: React.FormEvent) => {
		e.preventDefault()
		// users.map((el: IUser) => {
		// 	console.log("el.position", el.position );
		// 	if (el.name == loginfo.login && el.password == loginfo.password) {
		// 		localStorage.setItem('user', el.position)
		// 		setRedir(`/${el.position}`)
		// 	}
		// });
	}
	
	return (
		<form onSubmit={checkUser} className="form-login">
			<div className="inp-wrap">
				<p className="inp-label">Login:</p>
				<input
					id="login"
					className="inp-login"
					type="text"
					placeholder="Login"
					onChange={getValue}
				/>
			</div>
			<div className="inp-wrap">
				<p className="inp-label">Password:</p>
				<input
					id="password"
					className="inp-login"
					type="password"
					placeholder="Password"
					onChange={getValue}
				/>
			</div>
			<button className="btn btn-login">Send</button>
		</form>
	)
}

export default Login;
