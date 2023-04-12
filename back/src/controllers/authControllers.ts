import { Request, Response } from "express";
import httpStatus from "http-status";
import { createUser, signIn } from "@/services/authService";

export async function usersPost(req: Request, res: Response) {
  try {
    const { email, password, name, image } = req.body;

    const user = await createUser(email, password, name, image);
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {

    return res.status(httpStatus.BAD_REQUEST).send("Email cadastrado, verifique!");
  }
}

export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const result = await signIn(email, password);

    return res.status(httpStatus.OK).send({token: result[0].token, userData: result[0].userData});
} catch (error) {

  return res.sendStatus(422);
}
}