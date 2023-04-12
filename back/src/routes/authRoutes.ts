import { Router } from "express";
import { usersPost, singInPost } from "@/controllers/authControllers"
import { validateBody } from "@/middlewares/validationMiddlewares";
import { authSchema, authSignInSchema } from "@/schemas/authSchemas";

const authRoutes = Router();

authRoutes
  .post("/sign-up", [validateBody(authSchema)], usersPost)
  .post("/sign-in", [validateBody(authSignInSchema)], singInPost);

export default authRoutes;