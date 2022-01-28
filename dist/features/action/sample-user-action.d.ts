import { UserDetailsTypes } from '../type/sample-user-type';
export declare const sampleUserDetailsAction: () => {
    type: UserDetailsTypes.USER_DETAILS;
    payload: {};
};
export declare const setSampleUserDetailsAction: (customerDetails?: any) => {
    type: UserDetailsTypes.SET_USER_DETAILS;
    payload: any;
};
