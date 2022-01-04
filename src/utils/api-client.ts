export function* apiClient(apiClass, params, moduleUrl){
    const data = yield apiClass.executeRequest(params, moduleUrl)
    return data
}