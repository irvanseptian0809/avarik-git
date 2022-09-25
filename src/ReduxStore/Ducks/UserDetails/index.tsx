import createReducer from '../../../Utils/createReducer'

export const USER_DETAILS = 'USER_DETAILS'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAILED = 'USER_DETAILS_FAILED'

export interface interfaceUser {
  name?: string,
  id?: string,
  image?: string,
}

export interface interfaceuserDetails {
  data: interfaceUser,
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const INITIAL_STATE: interfaceuserDetails = {
  data: {},
  isLoading: false,
  isError: false,
  errorMessage: '',
}

const reducer = createReducer(INITIAL_STATE, {
  [USER_DETAILS]: (state: any) => ({
    ...state,
    isLoading: true,
  }),
  [USER_DETAILS_SUCCESS]: (state: any, payload: interfaceUser) => ({
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

export const userDetailsFetch = () => ({
  type: USER_DETAILS,
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