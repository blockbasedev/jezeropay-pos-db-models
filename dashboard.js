import { Schema, model } from 'mongoose';

const DashboardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    contactName: { type: String },
    phoneNo: { type: String },
    businessName: { type: String },
    businessType: { type: String },
    email: { type: String },
    registration: { type: String },
    transactionLimit: { type: String },
    website: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('dashboard ', DashboardSchema);
