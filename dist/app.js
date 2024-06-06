"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const mongoConnection_1 = __importDefault(require("./services/mongoConnection"));
const middleware_1 = __importDefault(require("./middleware"));
exports.app = (0, express_1.default)();
const connection = (0, mongoConnection_1.default)();
(0, middleware_1.default)(exports.app);
exports.app.listen(config_1.port, () => {
    console.log('Listening on port... ', config_1.port);
});
