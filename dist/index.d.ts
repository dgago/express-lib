/// <reference types="express" />
import * as express from "express";
import { IRouter } from "./routes/router";
/**
 * Express App Bootstrapper.
 */
export declare const createApp: (routers: IRouter[]) => express.Application;

export {};

/// <reference types="express" />
/// <reference types="node" />
import * as express from "express";
import * as http from "http";
export declare const PORT: any;
/**
 * Bootstraps a HTTP Server for an Express Application.
 */
export declare const createServer: (app: express.Application) => http.Server;


/// <reference types="express" />
import * as express from "express";
export interface IRouter {
    path: string;
    router: express.Router;
}

import { IRouter } from "./router";
export declare const router: IRouter;

export declare const initConfig: () => void;
export declare const verifyConfiguration: () => void;
