import categories from "@/entities/categories/categories";
import training from "@/entities/training/training";
import { createTrainingProps } from "@/utils/trainingTypes";

async function create(data: createTrainingProps) {
  return await training.create(data);
}

async function updateOne(data: createTrainingProps) {
  return await training.updateOne({ _id: data.id }, data);
}

async function deleteManyByIDCategory(id: string, userId: string) {
  return await training.deleteMany({ categoriesId: id, userId: { $in: userId } });
}

async function deleteOne(id: string, userId: string) {
  return await training.deleteOne({ _id: id, userId: { $in: userId } });
}

async function find(userId: string) {
  const categoriesFind = await categories.find();
  
  const trainingsResults = [];

  for (let index = 0; index < categoriesFind.length; index++) {
    const element = categoriesFind[index];

    const trainingFind = await training.find({ userId, categoriesId: element._id });

    if (trainingFind.length > 0) {
      trainingsResults.push({ id: element._id ,category: element.name, trainings: trainingFind });
    }

  }

  return trainingsResults;
}

const trainingRepository = {
  create,
  deleteManyByIDCategory,
  find,
  updateOne,
  deleteOne
};

export default trainingRepository;