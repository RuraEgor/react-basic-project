import React, { Component, FunctionComponent } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { connect } from 'react-redux'
import { getUsersSel } from '../store/users/selectors'
import { checkUser } from '../store/users/actionCreators'

interface LoginProps {
	users: IUser[],
}

class Login extends Component<LoginProps> {
	
	constructor(props: LoginProps){
		super(props)
	}
	
	state = {
		login: 'Alex',
		password: 'Alex',
		way: ''
	}
	
	
	checkUser = (e: React.FormEvent) => {
		e.preventDefault();
		
		let login = this.state.login;
		let password = this.state.password;
		
		if (!login || !password) return false;
		
		this.props.users.map((el: IUser) => {
			if (el.name == login && el.password == password) {
				localStorage.setItem('user', String(el.id))
				this.setState({way: el.position})
			}
		});
	}
	
	getValue = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		this.setState({
			[e.currentTarget.id]: e.currentTarget.value
		});
	}
	
	
	render() {
		const { way, login } = this.state;
		if (way || localStorage.getItem('user')) return <Redirect to={'/tasksboard'}/>
		
		return (
			<form onSubmit={this.checkUser} className="form-login">
				<div className="inp-wrap">
					<p className="inp-label">Login:</p>
					<input
						id="login"
						className="inp-login"
						type="text"
						placeholder="Login"
						value={this.state.login}
						onChange={this.getValue}
					/>
				</div>
				<div className="inp-wrap">
					<p className="inp-label">Password:</p>
					<input
						id="password"
						className="inp-login"
						type="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.getValue}
					/>
				</div>
				<button className="btn btn-login">Send</button>
			</form>
		)
	}
}

export {Login};

// export default connect(
// 	(state: any) => ({
// 		users: getUsersSel(state),
// 	}),
// 	dispatch => ({
// 		checkUserFun(loginUser: ILogin) {
// 			dispatch(checkUser(loginUser))
// 		}
// 	})
// )(Login)




/*
const Login: FunctionComponent = () => {
	const [loginfo, setLoginfo] = React.useState<CheckLog | any>()
	const [redir, setRedir] = React.useState<string>()
	
	const users: IUser[] = useSelector(
		(state: any) => state,
		shallowEqual
	)
	
	console.log("users77", users );
	
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
			*/
