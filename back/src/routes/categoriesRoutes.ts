import { Router } from "express";
import { categoriesFind } from "@/controllers/categoriesControllers";
import { authenticateToken } from "@/middlewares/checkjwt";

const categoriesRoutes = Router();

categoriesRoutes
  .all("/*", authenticateToken)
  .get("/categories", categoriesFind);

export default categoriesRoutes;