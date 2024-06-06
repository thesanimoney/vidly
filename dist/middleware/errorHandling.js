"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandling = void 0;
const logger_1 = require("../services/logger");
const ErrorHandling = (err, req, res, next) => {
    logger_1.logger.error(err.message + ' ' + `token: ${req.header('x-auth-token')}`);
    return res.status(500).send('Internal server error');
};
exports.ErrorHandling = ErrorHandling;
exports.default = exports.ErrorHandling;
