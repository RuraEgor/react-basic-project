import React, {FunctionComponent, Component} from 'react';

interface ILogout {
	user: IUser;
	logout(): void;
	managFormFeature(): void;
}

const Header: FunctionComponent<ILogout> = ({user, logout, managFormFeature}) => {
	
	return (
		<header className="header">
			<button onClick={logout} className="btn btn-header btn-logout">Logout</button>
			{user.position === 'manager' &&
				<button onClick={managFormFeature}
			        className="btn btn-header btn-form-feature">Create feature</button>
			}
		</header>
	)
}

export default Header;
