interface IUser {
	id: number;
	name: string;
	password: string;
	position: string;
}

enum Status {
	create = 'create',
	complete = 'complete',
	process = 'process',
}

interface ILogin {
	name: string;
	password: string;
}

interface IFeature {
	id: number;
	name: string;
	status: string;
	tasks: ITask[];
}

interface ITask {
	id: number;
	name: string;
	status: string;
}

type dataState = {
	users: IUser[],
	features: IFeature[],
}

type FeatureAction = {
	type: string,
	feature: IFeature,
}

type RenameFeatureAction = {
	type: string,
	featureId: number,
	featureName: string
}

type UserLoginAction = {
	type: string,
	loginUser: ILogin
}

type TaskAction = {
	type: string,
	task: ITask,
	taskId: number
}

type RmFeatureAction = {
	type: string,
	id: number
}

type RmTaskAction = {
	type: string,
	id: number
}

type AddTaskAction = {
	type: string,
	task: ITask,
	featureId: number
}

type StatusFeatureAction = {
	type: string,
	featureId: number,
	status: string
}

type StatusTaskAction = {
	type: string,
	featureId: number,
	taskId: number,
	status: string
}

type DispatchType = (args: FeatureAction) => FeatureAction