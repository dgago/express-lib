import * as express from "express";
import { IRouter } from "./router";

const r: express.Router = express.Router();

r.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ status: "USERS" });
  }
);

export const router: IRouter = { path: "/users", router: r };
