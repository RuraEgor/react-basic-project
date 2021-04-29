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

interface IFeature {
	id: number;
	name: string;
	status: string;
	tasks: ITask[];
}

interface ITask {
	id: number;
	name: string;
}

type dataState = {
	users: IUser[],
	features?: IFeature[],
}

type FeatureAction = {
	type: string,
	feature: IFeature
}

type TaskAction = {
	type: string,
	task: ITask,
	// featureId: number
}

type DispatchType = (args: FeatureAction) => FeatureAction