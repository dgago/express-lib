"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("./config.json");
exports.initConfig = () => {
    const env = process.env.NODE_ENV || "development";
    console.log("env *****", env);
    if (env === "development" || env === "test") {
        const envConfig = config[env];
        Object.keys(envConfig).forEach((key) => {
            process.env[key] = envConfig[key];
        });
    }
};
//# sourceMappingURL=config.js.map