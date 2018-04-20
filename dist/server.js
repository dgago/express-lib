"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
exports.PORT = normalizePort(process.env.PORT || "3000");
let server;
/**
 * Bootstraps a HTTP Server for an Express Application.
 */
exports.createServer = (app) => {
    server = http.createServer(app);
    server.listen(exports.PORT);
    server.on("error", onError);
    server.on("listening", onListening);
    return server;
};
/**
 * Normalizes a port received as a parameter.
 * @param val port to normalize
 */
function normalizePort(val) {
    const p = parseInt(val, 10);
    if (isNaN(p)) {
        // named pipe
        return val;
    }
    if (p >= 0) {
        // port number
        return p.toString();
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 * @param error Error event parameter.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof exports.PORT === "string" ? `Pipe ${exports.PORT}` : `Port ${exports.PORT}`;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
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
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}
//# sourceMappingURL=server.js.map