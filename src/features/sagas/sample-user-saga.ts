import { all, fork, put, takeLatest, select } from "redux-saga/effects";
import { setSampleUserDetailsAction } from "../action";
import { ApiStatusCodes, CustomerDetails, PayloadCategoryEnum } from "adk-api";
import { apiClient } from "../../utils/api-client";
import { UserDetailsTypes } from "../type";
const getAppConfigState = (state) => state.appConfig;

function* handleUserDetails() {
  try {
    console.log("Inside Saga handleUserDetails");
    const appConfig = yield select(getAppConfigState);
    const moduleUrl = appConfig.baseUrl;
    // API request
    let customerDetailsReq = {
      category: PayloadCategoryEnum.CONTACT_LIST,
    };
    //API call
    let customerDetailsResult = yield apiClient(
      CustomerDetails,
      customerDetailsReq,
      moduleUrl
    );
    console.log("customer Detail Result", customerDetailsResult);
    if (
      customerDetailsResult &&
      customerDetailsResult.apiStatus.code === ApiStatusCodes.SUCCESS
    ) {
      // Setting API response
      yield put(
        setSampleUserDetailsAction({
          ...customerDetailsResult.customerDetails,
        })
      );
    } else {
    }
  } catch (e) {}
}

function* watchGetCustomerDetails() {
  yield takeLatest(UserDetailsTypes.USER_DETAILS, handleUserDetails);
}

function* sampleUserSaga(): IterableIterator<any> {
  yield all([fork(watchGetCustomerDetails)]);
}

export { sampleUserSaga };