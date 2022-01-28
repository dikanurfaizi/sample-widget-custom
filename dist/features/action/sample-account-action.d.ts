import { AccountsTypes } from '../type/sample-account-type';
export declare const fetchSavingsAccountListDetailsAction: (request: string) => {
    type: AccountsTypes.FETCH_SAVINGS_ACOUNT_DETAILS;
    payload: string;
};
export declare const setSavingAccountListDetails: (request: any) => {
    type: AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS;
    payload: any;
};
export declare const setSavingsAccountListDetailsStatus: (request: any) => {
    type: AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS_STATUS;
    payload: any;
};
