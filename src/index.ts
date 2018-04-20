import * as express from "express";
import * as http from "http";

import { initConfig } from "./config/config";
import { createApp } from "./app";
import { createServer } from "./server";

initConfig();

import { router as files } from "./routes/files";

const app: express.Application = createApp([files]);
const server: http.Server = createServer(app);
