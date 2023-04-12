import { Request, Response } from "express";
import httpStatus from "http-status";

import { findCategories } from "@/services/categoriesService";

export async function categoriesFind(req: Request, res: Response) {
  try {

    const response = await findCategories();

    return res.status(httpStatus.OK).send(response);

  } catch (error) {

    return res.status(httpStatus.BAD_REQUEST).send("Erro ao buscar categorias, verifique!");
  }
}