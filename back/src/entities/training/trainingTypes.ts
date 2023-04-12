import mongoose from 'mongoose';

export interface ITraining extends mongoose.Document {
    description: string;
    userId: string;
    categoriesId: string;
    createdAt: string;
}