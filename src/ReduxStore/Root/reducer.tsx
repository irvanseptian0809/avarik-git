import { combineReducers } from 'redux'
import UserLists from 'ReduxStore/Ducks/UserLists'
import UserDetails from 'ReduxStore/Ducks/UserDetails'

const appReducers = combineReducers({
  UserLists,
  UserDetails,
})

const rootReducers = (state: any, action: any) => {
  return appReducers(state, action)
}

export default rootReducers