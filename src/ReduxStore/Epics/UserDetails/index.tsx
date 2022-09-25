import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'

import {
  USER_DETAILS,
  userDetailsFetchSuccess,
  userDetailsFetchFailed,
} from 'ReduxStore/Ducks/UserDetails'

export function userDetailsFetchEpic(action$: any, state$: any, { api }: any) {
  return action$.pipe(
    ofType(USER_DETAILS),
    mergeMap( async () => {
      try {
        const result = await api(`/users/${state$.value.UserDetails.login}/repos`)
        return userDetailsFetchSuccess(result.data)
      } catch {
        return userDetailsFetchFailed('Failed Fetching Data')
      }
    }),
  )
}
