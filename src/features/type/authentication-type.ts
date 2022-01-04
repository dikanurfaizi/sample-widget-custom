export enum AuthenticationTypes {
SET_AUTHENTICATION_STATUS = '@@authentication/SET_AUTHENTICATION_STATUS',
SET_USER_INFO = '@@authentication/SET_USER_INFO'
}

export interface AuthenticationState {
  readonly isAuthenticated: boolean
  readonly userInfo?: UserInfo
}

export interface UserInfo {
  userGroup?: string
}