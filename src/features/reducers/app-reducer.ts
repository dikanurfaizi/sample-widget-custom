import { Reducer } from 'redux'
import { AppState, AppActionTypes } from '../type/app-type'

export const initialState: AppState = {}

const reducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.SAMPLE: {
      return {
        ...state,
        sampledata: 'sample data'
      }
    }
    default: {
      return state
    }
  }
}
export { reducer as appReducer }