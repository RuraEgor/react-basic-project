import React, {FunctionComponent, Component} from 'react';

const Header: FunctionComponent<any> = ({showFormFeature, logout}) => {
	
	const showFormFeatureFun = () => {
		showFormFeature();
	}
	
	return (
		<header className="header">
			<button onClick={logout} className="btn btn-header btn-logout">Logout</button>
			<button onClick={showFormFeatureFun} className="btn btn-header btn-form-feature">Create feature</button>
		</header>
	)
}

export default Header;
