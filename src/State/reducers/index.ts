import { combineReducers } from 'redux'
import reducer from './dashboardReducer';
import dashboardReducer from "./dashboardReducer"

const reducers = combineReducers({
 dashboard : dashboardReducer
})

export default reducers;
export type State = ReturnType<typeof reducer>

