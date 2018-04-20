"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const r = express.Router();
r.get("/", (req, res, next) => {
    res.send({ status: "USERS" });
});
exports.router = { path: "/users", router: r };
//# sourceMappingURL=users.js.map