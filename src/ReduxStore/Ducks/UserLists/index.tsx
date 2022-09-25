import createReducer from '../../../Utils/createReducer'

export const USER_LISTS = 'USER_LISTS'
export const USER_LISTS_SUCCESS = 'USER_LISTS_SUCCESS'
export const USER_LISTS_FAILED = 'USER_LISTS_FAILED'

export interface interfaceUser {
  login?: string,
  id?: string,
  avatar_url?: string,
  html_url?: string,
}

export interface interfaceUserLists {
  data: interfaceUser[],
  pagination: {
    keyword: string,
    per_page: number,
    page: number,
    total: number,
  }
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const INITIAL_STATE: interfaceUserLists = {
  data: [],
  pagination: {
    keyword: "irvan",
    per_page: 10,
    page: 1,
    total: 0,
  },
  isLoading: false,
  isError: false,
  errorMessage: '',
}

const reducer = createReducer(INITIAL_STATE, {
  [USER_LISTS]: (state: any) => ({
    ...state,
    isLoading: true,
  }),
  [USER_LISTS_SUCCESS]: (state: any, payload: any) => ({
    ...state,
    isLoading: false,
    isError: false,
    data: payload.items,
    pagination: {
      ...state.pagination,
      total: payload.total_count,
    }
  }),
  [USER_LISTS_FAILED]: (state: any, payload: string) => ({
    ...state,
    isLoading: false,
    isError: true,
    errorMessage: payload,
  })
})

export const userListsFetch = () => ({
  type: USER_LISTS,
})
export const userListsFetchSuccess = (payload: any) => ({
  type: USER_LISTS_SUCCESS,
  payload,
})
export const userListsFetchFailed = (payload: string) => ({
  type: USER_LISTS_FAILED,
  payload,
})

export default reducer