import * as Yup from "yup";

export const authSchema = Yup.object().shape({
  email: Yup.string().email().required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
  name: Yup.string().required('Nome é obrigatório'),
  image: Yup.string().required('Imagem é obrigatório'),
  createdAt: Yup.date()
});

export const authSignInSchema = Yup.object().shape({
  email: Yup.string().email().required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
  createdAt: Yup.date()
});