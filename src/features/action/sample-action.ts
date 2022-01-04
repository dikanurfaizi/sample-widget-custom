import { action } from 'typesafe-actions'
import { AppActionTypes } from '../type/app-type'
export const sampleAction = () => action(AppActionTypes.SAMPLE)