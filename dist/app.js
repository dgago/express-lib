"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
/**
 * Express App Bootstrapper.
 */
exports.createApp = (routers) => {
    const app = express();
    app.use(morgan(process.env.NODE_ENV || "dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // Dummy route for GET /
    app.get("/", (req, res, next) => {
        res.send({ status: "OK" });
    });
    // Routers setup
    if (routers) {
        for (const r of routers) {
            app.use(r.path, r.router);
        }
    }
    app.use((err, req, res, next) => {
        if (req.xhr) {
            res.status(500).json(err);
        }
        else {
            next(err);
        }
    });
    return app;
};
//# sourceMappingURL=app.js.map