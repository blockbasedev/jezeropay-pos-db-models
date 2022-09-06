import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    contactName: { type: String },
    handleName: { type: String },
    primaryAddress: { type: String },
    secondaryAddress: { type: String },
    coverImage: { type: String },
    logo: { type: String },
    email: { type: String },
    mobile: { type: String },
    businessName: { type: String },
    businessType: { type: String },
    registrationDate: { type: Date, default: Date.now },
    website: { type: String },
    transactionLimit: { type: String },
    socialMedia: [{ type: String }],
  },
  {
    timestamps: true,
  },
);

export default model('profile', ProfileSchema);
