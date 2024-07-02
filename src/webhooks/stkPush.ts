import { Request, Response } from "express";
import { Purchase } from "../models/Purchase";

export const processDarajaResponse = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("received");

    let checkoutRequestID = req.body.Body.stkCallBack.CheckoutRequestID;
    let resultCode = req.body.Body.stkCallBack.ResultCode;
    let resultDescription = req.body.Body.stkCallBack.ResultDescription;

    let purchaseDoc = await Purchase.findOne({
      checkoutRequestID: checkoutRequestID,
    });

    if (!purchaseDoc) return;

    if (resultCode == 0) {
      purchaseDoc.callBackMetaData = req.body.Body.stkCallBack.CallBackMetadata;
    }

    purchaseDoc.resultCode = resultCode;
    purchaseDoc.resultDescription = resultDescription;

    await purchaseDoc.save();

    console.log("Updated purchase \n", purchaseDoc);

    //send email
  } catch (error) {
    console.log(error);
  }
};
