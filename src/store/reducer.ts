import { combineReducers } from 'redux'
import users from './users/reducer'
import features from './features/reducer'

export default combineReducers({
	users,
	features
})