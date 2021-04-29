import { createSelector } from 'reselect'

const getUsers = (state: dataState): IUser[] => state.users
const getFeatures = (state: dataState): IFeature[] => state.features

export const getUsersSel = createSelector(
	getUsers,
	(users) => {
		return users
	}
)

export const getFeatSel = createSelector(
	getFeatures,
	(features) => {
		return features
	}
)