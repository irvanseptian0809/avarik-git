import { combineEpics } from 'redux-observable'

import * as UserListsEpics from 'ReduxStore/Epics/UserLists'
import * as UserDetailsEpics from 'ReduxStore/Epics/UserDetails'
import api from 'Utils/api'

function rootEpics(action$: any, store: any) {
  const dependencies = {
    api,
  }
  const allEpics = [
    ...Object.values(UserListsEpics),
    ...Object.values(UserDetailsEpics),
  ]

  return combineEpics(...allEpics)(action$, store, dependencies)
}

export default rootEpics