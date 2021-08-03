import mongoose from 'mongoose';
import {SubscriptionDocument} from '../utils/types/subscription'


const SubscriptionSchema = new mongoose.Schema(
    {
        topic: { type: String, required: true },
        url: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Subscription = mongoose.model<SubscriptionDocument>('Subscription', SubscriptionSchema);

export default Subscription;
