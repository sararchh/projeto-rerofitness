import mongoose from 'mongoose';

export interface ICategories extends mongoose.Document {
    name: string;
}