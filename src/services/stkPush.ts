import axios from "axios";

import { config } from "../config/config";

const c2bUrl = config.C2BURL;
const token_url = config.TOKEN_URL;
const basicAuthToken = Buffer.from(
  `${config.DARAJA_CONSUMER_KEY}:${config.DARAJA_CONSUMER_SECRET}`
).toString("base64");

let accessToken = "",
  CheckoutRequestID = "";

const getToken = async function () {
  try {
    let result = await axios.get(token_url, {
      headers: {
        Authorization: `Basic ${basicAuthToken}`,
      },
    });

    console.log(result.data);

    return (accessToken = result.data.access_token);
  } catch (err: any) {
    console.error(err);
  }
};

export const generateStkPush = async function (
  PhoneNumber: string,
  amount: number = 100
) {
  accessToken = await getToken();

  const date = new Date();

  let day = date.getDate();

  let month = date.getUTCMonth() + 1;
  let year = date.getFullYear();

  let hour = date.getHours();

  let minutes = date.getMinutes();

  let seconds = date.getSeconds();

  let Timestamp = `${year}${month < 10 ? "0" + month : month}${
    day < 10 ? "0" + day : day
  }${hour < 10 ? "0" + hour : hour}${minutes < 10 ? "0" + minutes : minutes}${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  let Password = Buffer.from(
    `${config.DARAJA_BUSINESS_SHORT_CODE}${config.DARAJA_PASSKEY}${Timestamp}`
  ).toString("base64");

  console.log("password", Password);

  let result = await axios.post(
    c2bUrl,
    {
      BusinessShortCode: config.DARAJA_BUSINESS_SHORT_CODE,
      Password: Password,
      Timestamp: Timestamp,
      TransactionType: "CustomerBuyGoodsOnline",
      Amount: config.BOOK_PRICE,
      PartyA: `254${PhoneNumber}`,
      PartyB: "4381282",
      PhoneNumber: `254${PhoneNumber}`,
      CallBackURL: `https://api.navigatingadolescence.online/api/v1/webhooks/stkPush`,
      AccountReference: `4381282`,
      TransactionDesc: "Book Purchase",
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  CheckoutRequestID = result.data.CheckoutRequestID;
  let ResponseCode = result.data.ResponseCode;
  let ResponseDescription = result.data.ResponseDescription;

  return { CheckoutRequestID, ResponseCode, ResponseDescription };
};
