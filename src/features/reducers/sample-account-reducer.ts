import { Reducer } from 'redux'
import {
    AccountsTypes,
    ApiRequestStatus
} from '../type'

const initialState: any ={
    savingsAccountListDetails : [],
    savingsAccountListDetailsStatus: ApiRequestStatus.IDLE
}

const sampleAccountReducer: Reducer<any> = (state = initialState, action) => {
    switch (action.type) {
        case AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS:
          return {
            ...state,
            savingsAccountListDetails: action.payload
          }
          case AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS_STATUS:
          return {
            ...state,
            savingsAccountListDetailsStatus: action.payload
          }
        default:
          return state
      }
}

export { sampleAccountReducer }