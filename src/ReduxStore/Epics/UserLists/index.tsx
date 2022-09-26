import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'

import {
  USER_LISTS,
  userListsFetchSuccess,
  userListsFetchFailed,
} from 'ReduxStore/Ducks/UserLists'

export function userListsFetchEpic(action$: any, state$: any, { api }: any) {
  return action$.pipe(
    ofType(USER_LISTS),
    mergeMap( async () => {
      try {
        const { keyword, per_page, page } = state$.value.UserLists.pagination;
        const result = await api( '/search/users',
          {
            q: keyword,
            per_page,
            page,
          }
        )
        return userListsFetchSuccess(result.data)
      } catch {
        return userListsFetchFailed('Failed Fetching Data')
      }
    }),
  )
}
