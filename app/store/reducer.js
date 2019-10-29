import {combineReducers} from 'redux'

import folder from './folder'
import session from './session'
import {toastReducer as toast} from 'react-native-redux-toast'
export default combineReducers({
    folder,
    session,
    toast
})