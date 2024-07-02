import { Schema, model } from "mongoose";
import { IPurchase } from "../../types/IPurchase";

const PurchaseSchema = new Schema<IPurchase>({
  phoneNumber: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  checkoutRequestID: {
    type: String,
    required: true,
  },
  initiated: {
    type: Boolean,
    default: true,
  },
  successful: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  bookDelivered: {
    type: Boolean,
    default: false,
  },
  paymentDetails: {
    type: String,
  },
  timeInitiated: {
    type: Number,
    default: Date.now(),
  },
  responseCode: {
    type: Number,
  },
  responseDescription: String,
  resultCode: Number,
  resultDescription: String,
  callBackMetaData: {},
});

export const Purchase = model("Purchase", PurchaseSchema);
