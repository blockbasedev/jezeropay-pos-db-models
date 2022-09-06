import { Schema, model } from 'mongoose';

const PaymentButtonSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    title: { type: String },
    buttonType: { type: String },
    amount: { type: String },
    buttonLabel: { type: String },
    buttonTheme: { type: String },
    fieldType: { type: String },
    fieldLabel: { type: String },
    fieldTypeNo: { type: String },
    fieldLabelNo: { type: String },
    email: { type: String },
    phone: { type: String },
    htmlCode: { type: String },
    status: { type: Boolean, default: false },
    action: { type: String },
    createdAt: { type: String },
    unitsSold: { type: String }, 
    totalSale: { type: String },
    itemName: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('payment_button', PaymentButtonSchema);