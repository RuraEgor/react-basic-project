interface IUser {
	id: number;
	name: string;
	password: string;
	position: string;
}

type dataState {
	users: IUser[]
}