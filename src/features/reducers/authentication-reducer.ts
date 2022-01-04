import { Reducer } from 'redux'
import { AuthenticationTypes, AuthenticationState } from '../type'

const initialState: AuthenticationState = {
  isAuthenticated: false,
  userInfo: {
    userGroup: ''
  }
}

const authenticationReducer: Reducer<AuthenticationState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthenticationTypes.SET_AUTHENTICATION_STATUS:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case AuthenticationTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload
        }
      }
    default: {
      return state
      }
    }
  }
export { authenticationReducer }