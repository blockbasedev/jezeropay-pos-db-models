import { Schema, model } from 'mongoose';
import Paginate from "mongoose-paginate-v2";

const PaymentPageSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    logo: { type: String },
    title: { type: String },
    pageDescription: { type: String },
    email: { type: String },
    phoneNo: { type: String },
    amount: { type: String },
    status: { type: Boolean, default: false },
    url: { type: String },
    PaymentPageId: { type: String },
    createdBy: { type: String },
    createdAt: { type: String },
    expiresOn: { type: String },
    revenue: { type: String },
    price: { type: String },
    unitsSold: { type: String },
    totalSale: { type: String },
    itemName: { type: String },
  },
  {
    timestamps: true,
  },
);
PaymentPageSchema.plugin(Paginate);

export default model('payment_pag', PaymentPageSchema);
