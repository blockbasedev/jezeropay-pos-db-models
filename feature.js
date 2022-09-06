import { Schema, model } from 'mongoose';

const FeatureSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    paymentPage: { type: Boolean, default: false },
    paymentLink: { type: Boolean, default: false },
    paymentButton: { type: Boolean, default: false },
    invoice: { type: Boolean, default: false },
    reward: { type: Boolean, default: false },
    nft: { type: Boolean, default: false },
    item: { type: Boolean, default: false },
    shopping: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);
export default model('feature', FeatureSchema);
