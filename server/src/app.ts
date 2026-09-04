import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import { userRouter } from "./routes/users/users.router.ts";
import morgan from "morgan";

const app: Express = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions)).use(morgan("combined")).use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Listening from port: ${port}`);
});
