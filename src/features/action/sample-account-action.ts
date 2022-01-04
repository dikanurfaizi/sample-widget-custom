import { action } from 'typesafe-actions'
import { AccountsTypes } from '../type/sample-account-type'

export const fetchSavingsAccountListDetailsAction = (request: string) =>
    action(AccountsTypes.FETCH_SAVINGS_ACOUNT_DETAILS, request)
    
export const setSavingAccountListDetails = (request: any) =>
    action(AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS, request)
export const setSavingsAccountListDetailsStatus = (request) =>
    action(AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS_STATUS, request)