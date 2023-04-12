import mongoose from 'mongoose';
import { ICategories } from './categoriesTypes';

const CategoriesSchema = new mongoose.Schema({
  name: { type: String, required: true, select: true },
});

export default mongoose.model<ICategories>('categories', CategoriesSchema);
