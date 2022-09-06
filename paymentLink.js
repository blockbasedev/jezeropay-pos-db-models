import { Schema, model } from 'mongoose';

const PaymentLinkSchema = new Schema(
    {
        amount: { type: String },
        paymentFor: { type: String },
        email: { type: String },
        mobile: { type: String },
        linkExpiry: { type: String },
        referenceId: { type: String },
        noExpiry: { type: Boolean, default: false },
        linkType: { type: String },
        status: { type: Boolean, default: false },
        partialPayment: { type: String },
        amountPaid: { type: String },
        linkUrl: { type: String },
        customerDetail: { type: String },
        reminder:  { type: Boolean, default: false },
        createdBy: { type: String },
        createdAt: { type: String },
        expiresOn: { type: String }, 
        notes: { type: String },
        paymentlink: { type: String },
        paymentLinkId: { type: String },
    },
    {
        timestamps: true,
    },
);
export default model('payment_link', PaymentLinkSchema);