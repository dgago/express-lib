"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookieParser = require("cookie-parser");
const express = require("express");
const http = require("http");
const logger = require("morgan");
const path = require("path");
const config_1 = require("./config/config");
config_1.initConfig();
const port = normalizePort(process.env.PORT || "3000");
const app = createExpressApp(port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
/**
 * Create express app.
 */
function createExpressApp(appPort) {
    const eapp = express();
    eapp.use(logger("dev"));
    eapp.use(express.json());
    eapp.use(express.urlencoded({ extended: false }));
    eapp.use(cookieParser());
    eapp.use(express.static(path.join(__dirname, "public")));
    eapp.get("/", (req, res, next) => {
        res.send("index");
    });
    eapp.get("/users", (req, res, next) => {
        res.send([{ "name": "Diego" }, { "name": "Nahuel" }]);
    });
    // app.use("/", indexRouter);
    // app.use("/users", usersRouter);
    // app.use("/polls", pollsRouter);
    eapp.use((err, req, res, next) => {
        if (req.xhr) {
            res.status(500).json(err);
        }
        else {
            next(err);
        }
    });
    eapp.set("port", appPort);
    return eapp;
}
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const p = parseInt(val, 10);
    if (isNaN(p)) {
        // named pipe
        return val;
    }
    if (p >= 0) {
        // port number
        return p;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);
}
//# sourceMappingURL=index.js.map