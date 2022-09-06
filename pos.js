 import { Schema, model } from 'mongoose';
import Paginate from "mongoose-paginate-v2";

const PosSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    image: { type: String },
    name: { type: String },
    subName: { type: String },
    rating: { type: String },
    price: { type: String },
    solPrice: { type: String },
  },
  {
    timestamps: true,
  },
);
PosSchema.plugin(Paginate);

export default model('pos', PosSchema);