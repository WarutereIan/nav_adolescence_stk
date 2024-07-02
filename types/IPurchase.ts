export interface IPurchase {
  phoneNumber: number;
  userEmail: string;
  checkoutRequestID: string;
  initiated: boolean;
  successful: boolean;
  completed: boolean;
  bookDelivered: boolean;
  paymentDetails: string;
  timeInitiated: number;
  timeSettled: number;
  responseCode: number;
  responseDescription: string;
  resultCode: number;
  resultDescription: string;
  callBackMetaData: any;
}
