import { Request, Response } from "express";
import { generateStkPush } from "../services/stkPush";
import { Purchase } from "../models/Purchase";

export const initiateStkPush = async (req: Request, res: Response) => {
  try {
    let { PhoneNumber, email } = req.body;

    let StkResponse = await generateStkPush(PhoneNumber);

    let purchaseDoc = await Purchase.create({
      phoneNumber: PhoneNumber,
      userEmail: email,
      checkoutRequestID: StkResponse.CheckoutRequestID,
      responseCode: StkResponse.ResponseCode,
      responseDescription: StkResponse.ResponseDescription,
    });

    return res.status(200).json({ StkResponse, purchaseDoc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
