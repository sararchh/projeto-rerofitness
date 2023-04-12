import categoriesRepository from "@/repositories/categoriesRepository";

export async function findCategories() {

  return await categoriesRepository.find();
}