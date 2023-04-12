import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares/checkjwt";
import { createTraining, deleteTraining, findTraining, updateTraining, deleteTrainingOne } from "@/services/trainingService";

export async function trainingPost(req: AuthenticatedRequest, res: Response) {
  try {
    const { description, categoriesId } = req.body;
    const userId = req.userId;

    await createTraining({
      description,
      categoriesId,
      userId
    });

    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function trainingPut(req: AuthenticatedRequest, res: Response) {
  try {
    const { description, categoriesId } = req.body;
    const userId = req.userId;
    const { id } = req.params;

    if (!id) {
      return res.status(httpStatus.BAD_REQUEST).send("Id inválido");
    }

    await updateTraining({
      description,
      categoriesId,
      userId,
      id
    });

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function trainingDelete(req: AuthenticatedRequest, res: Response) {
  try {
    const { id } = req.params;
    const userId = req.userId;

    if (!id) {
      return res.status(httpStatus.BAD_REQUEST).send("Id inválido");
    }

    await deleteTraining(id, userId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.message === "ErrorDeleting") {
      return res.status(httpStatus.BAD_REQUEST).send("Erro ao deletar");
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function trainingDeleteOne(req: AuthenticatedRequest, res: Response) {
  try {
    const { id } = req.params;
    const userId = req.userId;

    if (!id) {
      return res.status(httpStatus.BAD_REQUEST).send("Id inválido");
    }

    await deleteTrainingOne(id, userId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.message === "ErrorDeleting") {
      return res.status(httpStatus.BAD_REQUEST).send("Erro ao deletar");
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function trainingFind(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const response = await findTraining(userId);
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    console.log(error);
    
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}