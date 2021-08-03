import mongoose from 'mongoose';
export type SubscriptionDocument = mongoose.Document & {
    topic: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}
