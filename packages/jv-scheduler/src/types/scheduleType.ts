export interface ApiErrorMsg {
  apiErrorTitle?: string;
  retryNetworkTitle?: string;
}
export interface IApiFailed extends ApiErrorMsg {
  userTimezoneApiFailure?: boolean;
  userOutputFormatApiFailure?: boolean;
}
