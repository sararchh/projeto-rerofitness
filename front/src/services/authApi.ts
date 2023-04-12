import api from './index';

export async function postSignIn(values: any) {
  const { data } = await api.post("/auth/sign-in", values);

  return data;
}


export async function postSignUp(values: any) {
  const { data } = await api.post("/auth/sign-up", values);

  return data;
}