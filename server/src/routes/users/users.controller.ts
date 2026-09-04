import { type Request, type Response } from "express";
import { getAllUsers, getUserById } from "../../models/users.model.ts";

export const httpGetAllUsers = (_req: Request, res: Response) => {
  res.status(200).json(getAllUsers());
};

export const httpGetUserById = (req: Request, res: Response) => {
  const user = getUserById(Number(req.params.id));

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(404).json({ error: "User not found" });
};
