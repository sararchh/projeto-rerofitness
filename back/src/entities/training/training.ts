import mongoose from 'mongoose';
import { ITraining } from './trainingTypes';
import '../categories/categories';

const TrainingSchema = new mongoose.Schema({
  description: { type: String, required: true, select: true },
  userId: { type: String, required: true, select: true },
  categoriesId: { type: String, required: true, select: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITraining>('training', TrainingSchema);
