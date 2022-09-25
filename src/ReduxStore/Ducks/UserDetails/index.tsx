import createReducer from '../../../Utils/createReducer'

export const USER_DETAILS = 'USER_DETAILS'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAILED = 'USER_DETAILS_FAILED'

export interface interfaceuserDetails {
  data: any,
  login: string,
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const INITIAL_STATE: interfaceuserDetails = {
  data: [],
  login: "",
  isLoading: false,
  isError: false,
  errorMessage: '',
}

const reducer = createReducer(INITIAL_STATE, {
  [USER_DETAILS]: (state: any, payload: string) => ({
    ...state,
    isLoading: true,
    login: payload,
  }),
  [USER_DETAILS_SUCCESS]: (state: any, payload: any) => ({
    ...state,
    isLoading: false,
    isError: false,
    data: payload,
  }),
  [USER_DETAILS_FAILED]: (state: any, payload: string) => ({
    ...state,
    isLoading: false,
    isError: true,
    errorMessage: payload,
  })
})

export const userDetailsFetch = (payload: string) => ({
  type: USER_DETAILS,
  payload,
})
export const userDetailsFetchSuccess = (payload: any) => ({
  type: USER_DETAILS_SUCCESS,
  payload,
})
export const userDetailsFetchFailed = (payload: string) => ({
  type: USER_DETAILS_FAILED,
  payload,
})

export default reducer