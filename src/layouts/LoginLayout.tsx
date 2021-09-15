import React, { Component, FunctionComponent } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { getUsersSel } from '../store/users/selectors'
import { checkUser } from '../store/users/actionCreators'
import { Login } from '../components/Login'

interface ILoginLayout {
	users: IUser[];
	checkUserFun(data: ILogin): void;
}

class LoginLayout extends Component<ILoginLayout> {
	
	constructor(props: ILoginLayout){
		super(props)
	}
	
	render() {
		const {users} = this.props;
		
		return <Login users={users} />
	}
}

const mapStatetoProps = (state: dataState) => {
	return {
		users: getUsersSel(state)
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		checkUserFun(loginUser: ILogin): void {
			dispatch(checkUser(loginUser))
		}
	}
}

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(LoginLayout)
