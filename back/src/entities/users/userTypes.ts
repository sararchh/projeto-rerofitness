import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    name: string;
    image: string;
    password: string;
    email: string;
    createdAt: string;
}