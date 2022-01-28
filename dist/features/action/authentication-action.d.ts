import { AuthenticationTypes, UserInfo } from '../type';
export declare const setAuthenticationStatusAction: (status: boolean) => {
    type: AuthenticationTypes.SET_AUTHENTICATION_STATUS;
    payload: boolean;
};
export declare const setUserInfoAction: (user: UserInfo) => {
    type: AuthenticationTypes.SET_USER_INFO;
    payload: UserInfo;
};
