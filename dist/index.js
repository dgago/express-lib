"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const app_1 = require("./app");
const server_1 = require("./server");
config_1.initConfig();
const users_1 = require("./routes/users");
const app = app_1.createApp([users_1.router]);
const server = server_1.createServer(app);
//# sourceMappingURL=index.js.map