import * as busboy from "connect-busboy";
import * as express from "express";

import { IRouter } from "./router";

const r: express.Router = express.Router();

r.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ status: "FILES" });
  }
);

r.use(busboy());

r.use((req: express.Request, res: express.Response) => {
  if ((<any>req).busboy) {
    (<any>req).busboy.on(
      "file",
      (
        fieldname: string,
        file: any,
        filename: string,
        encoding: string,
        mimetype: string
      ) => {
        console.log("FILE", [fieldname, filename, mimetype]);
      }
    );
    (<any>req).busboy.on(
      "field",
      (key: any, value: any, keyTruncated: any, valueTruncated: any) => {
        console.log("FIELD", [key, value]);
      }
    );
    (<any>req).busboy.once("end", () => {
      console.log("END");
      res.send({ busboy: "YES" });
    });

    req.pipe((<any>req).busboy);
  }

  res.send({ busboy: "NO" });
});

export const router: IRouter = { path: "/files", router: r };
