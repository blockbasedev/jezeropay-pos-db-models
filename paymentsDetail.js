import { Schema, model } from 'mongoose';

const PaymentsDetailSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    paymentId: { type: String },
    walletAddress: { type: String },
    paymentType: { type: String },
    amount: { type: String },
    payerDetails: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('payments_detail', PaymentsDetailSchema);
