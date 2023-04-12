import authRepository from "@/repositories/authRepository";
import trainingRepository from "@/repositories/trainingRepository";
import { createTrainingProps } from "@/utils/trainingTypes";


export async function createTraining(data: createTrainingProps) {
  const user = await authRepository.findByUserId(data.userId);
  if (!user) {
    throw Error()
  }

  const response = await trainingRepository.create(data);

  return response;
}

export async function updateTraining(data: createTrainingProps) {
  const response = await trainingRepository.updateOne(data);
  if (response.modifiedCount === 0) {
    throw new Error()
  }

  return response;
}

export async function deleteTraining(id: string, userId: string) {
  const deleteById = await trainingRepository.deleteManyByIDCategory(id, userId);
  if (deleteById.deletedCount === 0) {
    throw new Error("ErrorDeleting");
  };

  return true;
}

export async function deleteTrainingOne(id: string, userId: string) {
  const deleteById = await trainingRepository.deleteOne(id, userId);
  if (deleteById.deletedCount === 0) {
    throw new Error("ErrorDeleting");
  };

  return true;
}


export async function findTraining(userId: string) {
  const training = await trainingRepository.find(userId);

  return training;
}