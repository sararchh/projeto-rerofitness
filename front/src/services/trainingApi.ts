import api from './index';

interface Props {
  description: string,
  categoriesId: string
}

export async function getTraining() {
  const { data } = await api.get('/training');

  return data;
}

export async function deleteTraining(id: string) {
  const { data } = await api.delete(`/training/${id}`);

  return data;
}

export async function deleteTrainingOne(id: string) {
  const { data } = await api.delete(`/training/api/${id}`);

  return data;
}


export async function postTraining(info: Props) {
  const { data } = await api.post('/training', info);

  return data;
}
