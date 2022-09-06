import { Schema, model } from 'mongoose';


const CartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    posid: { type: Schema.Types.ObjectId, ref: 'pos' }, 
    subTotal: { type: String },
    taxCharge: { type: String },
    transcationFee: { type: String },
    total: { type: String },
    price: { type: String },
    qunatity: { type: Number },
  },
  {
    timestamps: true,
  },
);


export default model('cart', CartSchema);