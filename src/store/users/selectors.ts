import { createSelector } from 'reselect'

const getUsers = (state: dataState): IUser[] => state.users

export const getUsersSel = createSelector(
	getUsers,
	(users: IUser[]) => {
		return users
	}
)