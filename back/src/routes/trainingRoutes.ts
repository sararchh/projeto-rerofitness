import { Router } from "express";
import { authenticateToken } from "@/middlewares/checkjwt";
import { validateBody } from "@/middlewares/validationMiddlewares";
import { trainingPost, trainingPut, trainingDelete, trainingFind, trainingDeleteOne } from "@/controllers/trainingControllers";
import { trainingSchema } from "@/schemas/trainingSchemas";

const trainingRoutes = Router();

trainingRoutes
  .all("/*", authenticateToken)
  .post("/training", [validateBody(trainingSchema)], trainingPost)
  .put("/training/:id", [validateBody(trainingSchema)], trainingPut)
  .delete("/training/:id", trainingDelete)
  .delete("/training/api/:id", trainingDeleteOne)
  .get("/training", trainingFind)

export default trainingRoutes;