import "dotenv/config";

export const config = {
  MONGO_URI: process.env.MONGO_URI!,

  /**
   * @notice MPESA auth token URL:
   * @dev to get the MPESA client access token a GET request is sent to this URL
   */
  TOKEN_URL:
    "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",

  BASIC_AUTH_TOKEN: process.env.BASIC_AUTH_TOKEN!,

  STK_PUSH_PASSWORD: process.env.STK_PUSH_PASSWORD!,

  /**
   * @notice MPESA API C2B URL
   * @dev transactions are posted to this url during payout to initiate STK Push
   */
  C2BURL: "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",

  BOOK_PRICE: process.env.BOOK_PRICE!,

  CALLBACK_URL: process.env.CALLBACK_URL!,

  DARAJA_PASSKEY: process.env.DARAJA_PASSKEY!,

  DARAJA_BUSINESS_SHORT_CODE: process.env.DARAJA_BUSINESS_SHORT_CODE!,

  DARAJA_CONSUMER_KEY: process.env.DARAJA_CONSUMER_KEY!,

  DARAJA_CONSUMER_SECRET: process.env.DARAJA_CONSUMER_SECRET!,

  MAILJET_API_KEY: process.env.MAILJET_API_KEY!,

  MAILJET_SECRET_KEY: process.env.MAILJET_API_KEY!,

  EMAIL_SERVICE: process.env.EMAIL_SERVICE!,
  EMAIL_HOST: process.env.EMAIL_HOST!,
  EMAIL_PORT: Number(process.env.EMAIL_PORT),
  EMAIL_USER: process.env.EMAIL_USER!,
  EMAIL_PWD: process.env.EMAIL_PWD!,

  /**
   * @notice MPESA EXPRESS STK TRANSACTION STATUS QUERY
   * @dev transaction status is queried here in case no response is received at the callback url
   */
  STK_TX_STAT_URL: process.env.STK_TX_QUERY_URL!,

  /**
   * @notice JWT configuration
   * @dev This is the secret key that will be used to sign the JWT
   */
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_TOKEN_EXPIRES_IN: 3600000 * 24 * 7, // 7 day
};
