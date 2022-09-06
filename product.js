import { Schema, model } from 'mongoose';
import Paginate from "mongoose-paginate-v2";

const ProductSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    itemName: { type: String },
    description: { type: String },
    amount: { type: String },
    action: { type: String },
    offer: { type: String }, 
    image: { type: String },
    quantity: { type: Number },
    tax: { type: String },
  },
  {
    timestamps: true,
  },
);
ProductSchema.plugin(Paginate);

export default model('product', ProductSchema);
