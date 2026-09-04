import { Router } from "express";
import { httpGetAllUsers, httpGetUserById } from "./users.controller.ts";

const userRouter = Router();

userRouter.get("/", httpGetAllUsers).get("/:id", httpGetUserById);

export { userRouter };
