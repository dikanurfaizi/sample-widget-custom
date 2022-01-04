import {combineReducers} from 'redux'
import {all} from 'redux-saga/effects'
import {AppState} from '../type/app-type'
import {appReducer} from '../reducers/app-reducer'

export interface ApplicationState {
  app: AppState,
}

export const createRootReducer = (history: History) =>
  combineReducers({
        app: appReducer
  })

export function* rootSaga() {
  yield all([
  ])
}