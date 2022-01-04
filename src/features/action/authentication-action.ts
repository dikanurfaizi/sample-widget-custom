import { action } from 'typesafe-actions'
import { AuthenticationTypes, UserInfo } from '../type'

export const setAuthenticationStatusAction = (status: boolean) => action(AuthenticationTypes.SET_AUTHENTICATION_STATUS, status)
export const setUserInfoAction = (user: UserInfo) => action(AuthenticationTypes.SET_USER_INFO, user)