import { action } from 'typesafe-actions'
import { UserDetailsTypes } from '../type/sample-user-type'

export const sampleUserDetailsAction = () => action(UserDetailsTypes.USER_DETAILS, {})
export const setSampleUserDetailsAction = (customerDetails?: any) => 
action(UserDetailsTypes.SET_USER_DETAILS, customerDetails)
