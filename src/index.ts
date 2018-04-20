import * as express from "express";
import * as http from "http";

import { initConfig } from "./config/config";
import { createApp } from "./app";
import { createServer } from "./server";

initConfig();

import { router as users } from "./routes/users";

const app: express.Application = createApp([users]);
const server: http.Server = createServer(app);
