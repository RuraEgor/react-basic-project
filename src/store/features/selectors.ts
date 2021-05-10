import { createSelector } from 'reselect'

const getFeatures = (state: dataState): any => state.features

export const getFeatSel = createSelector(
	getFeatures,
	(features: IFeature[]) => {
		return features
	}
)