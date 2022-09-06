import { Schema, model } from 'mongoose';
import Paginate from "mongoose-paginate-v2";

const NftSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    image: { type: String },
    createdDate: { type: String },
    name: { type: String },
    status: { type: Boolean, default: false },
    previewLink: { type: String },
    supply: { type: Number },
    type: { type: Boolean, default: true }, 
    address: { type: String },
    createdAt: { type: String },
  },
  {
    timestamps: true,
  },
);
NftSchema.plugin(Paginate);

export default model('nft', NftSchema);