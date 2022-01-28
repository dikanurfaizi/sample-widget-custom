import { all, fork, put, takeLatest, select } from 'redux-saga/effects'
import {
    setSavingAccountListDetails,
    setSavingsAccountListDetailsStatus
} from '../action'
import {
    AccountTypeEnum,
    AccountList,
    AccountDetailsSavings,
    ApiStatusCodes
} from 'adk-api'
import { apiClient } from '../../utils/api-client'
import {
    AccountsTypes,
    ApiRequestStatus
} from '../type'
const getAppConfigState = (state) => state.appConfig

function* handleAccountDetails(){
    try {
        console.log('Inside Saga handleAccountDetails')
        const appConfig = yield select(getAppConfigState)
        const moduleUrl = appConfig.baseUrl
        // API request
        let accountListReq = {
          accountTypes: [AccountTypeEnum.SAVINGS_DEPOSIT, AccountTypeEnum.DEMAND_DEPOSIT]
        }
        yield put(setSavingsAccountListDetailsStatus(ApiRequestStatus.IN_PROGRESS))
        //API call
        console.log("AccountList Req", accountListReq)
        let savingsAccountList = yield apiClient(AccountList, accountListReq, moduleUrl)
        console.log("Detail List show", savingsAccountList)
        let accountDetailsList = []
        let accountDetail, i
        if (savingsAccountList.apiStatus.code === ApiStatusCodes.SUCCESS) {
          for (i = 0; i < savingsAccountList.accountList.length; i++){
              //API call
              console.log("API CALL AccountList")
              let accountDetails = yield apiClient(AccountDetailsSavings,
                {
                    accountNumber: savingsAccountList.accountList[i].accountNumber,
                    accountType: savingsAccountList.accountList[i].accountType
                },
                moduleUrl
            )
            const {savingsAccountDetails, apiStatus} = accountDetails as any
            accountDetail = { ...savingsAccountList.accountList[i], apiStatus, ...savingsAccountDetails }
            accountDetailsList.push(accountDetail)
          }
          yield put(setSavingAccountListDetails(accountDetailsList))
          yield put(setSavingsAccountListDetailsStatus(ApiRequestStatus.SUCCESS))
        } else {
            yield put(setSavingsAccountListDetailsStatus(ApiRequestStatus.FAIL))
        }
      } catch (error) {
          yield put(setSavingsAccountListDetailsStatus(ApiRequestStatus.FAIL))
    }
}

function* watchGetCustomerDetails() {
    yield takeLatest(AccountsTypes.FETCH_SAVINGS_ACOUNT_DETAILS, handleAccountDetails)
}

function* sampleAccountSaga(): IterableIterator<any> {
    yield all([
        fork(watchGetCustomerDetails)])
}

export { sampleAccountSaga }