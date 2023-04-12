import * as Yup from "yup";

export const trainingSchema = Yup.object().shape({
  description: Yup.string().required('Descrição é obrigatório'),
  categoriesId: Yup.string().required('Id da categoria é obrigatório'),
  createdAt: Yup.date()
});
