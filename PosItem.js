 import { Schema, model } from 'mongoose';
import Paginate from "mongoose-paginate-v2";

const PosItemSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    image: { type: String },
    name: { type: String },
    subName: { type: String },
    rating: { type: String },
    price: { type: String },
    solPrice: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);
PosItemSchema.plugin(Paginate);

export default model('posItem', PosItemSchema);