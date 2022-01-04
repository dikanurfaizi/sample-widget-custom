export enum AppActionTypes {
  SAMPLE = '@@app/SAMPLE'
}
export interface AppState {
  readonly sampleData?: string
}
export enum ApiRequestStatus {
  IDLE = 'IDLE',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL'
}