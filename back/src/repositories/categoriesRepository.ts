import categories from "@/entities/categories/categories";

async function find() {
  return await categories.find();
}

const categoriesRepository = {
  find
};

export default categoriesRepository;