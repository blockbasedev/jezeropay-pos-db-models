import { Schema, model } from 'mongoose';
import Paginate from "mongoose-paginate-v2";

const RewardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    name: { type: String },
    createdAt: { type: String },
    description: { type: String },
    type: { type: String },
    status: { type: Boolean, default: false }, 
  },
  {
    timestamps: true,
  },
);
RewardSchema.plugin(Paginate);

export default model('reward', RewardSchema);