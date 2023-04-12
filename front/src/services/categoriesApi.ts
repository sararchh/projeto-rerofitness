import api from './index';

export async function getCategories() {
  const { data } = await api.get('/categories');

  return data;
}


