import mongoose from 'mongoose';
import { IUser } from './userTypes';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, select: true },
  image: { type: String, required: true, select: true },
  password: { type: String, required: true, select: true },
  email: { type: String, required: true, select: true },
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model<IUser>('users', UserSchema);
