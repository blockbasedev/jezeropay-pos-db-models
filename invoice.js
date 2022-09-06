import { Schema, model } from 'mongoose';
import Paginate from 'mongoose-paginate-v2';

const InvoiceSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: String },
    amount: { type: String },
    status: { type: Boolean, default: false },
    paymentLink: { type: String },
    customer: { type: String },
    receiptNo: { type: String },
  },
  {
    timestamps: true,
  },
);
InvoiceSchema.plugin(Paginate);

export default model('invoice', InvoiceSchema);
