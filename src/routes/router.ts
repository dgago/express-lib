import * as express from "express";

export interface IRouter {
  path: string;
  router: express.Router;
}
