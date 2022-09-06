import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    walletAddress: { type: String },
    isProfile: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    blocked: { type: Boolean, default: false },

  },
  {
    timestamps: true,
  },
);

export default model('user', UserSchema);
