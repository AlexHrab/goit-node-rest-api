import express from "express";
import emptyBody from "../helpers/emptyBody.js";
import validateBody from "../helpers/validateBody.js";
import { authSigninSchema, authSignupSchema } from "../schemas/authSchemas.js";
import authControllers from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  emptyBody,
  validateBody(authSignupSchema),
  authControllers.signup
);

export default authRouter;
